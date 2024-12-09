"use client";

import { useState } from "react";
import ModalTaskProof from "./_components/ModalTaskProof";
import UserCardAvailableTask from "./_components/UserCardAvailableTask";
import UserTaskList from "./_components/UserTaskList";
import { ITask } from "./_entity/Task.entity";
import type { NextPage } from "next";
import { useAccount } from "wagmi";
import ModalMetamask from "~~/components/ModalMetamask";
import { useScaffoldReadContract, useScaffoldWriteContract } from "~~/hooks/scaffold-eth";
import { useGlobalState } from "~~/services/store/store";
import ModalInfoTask from "~~/components/ModalInfoTask";

const Home: NextPage = () => {
  //states
  const [showInfoTask, setShowInfoTask] = useState<boolean>(false);
  const [taskSelected, setTaskSelected] = useState<ITask | undefined>(undefined);

  const [showProofModal, setShowProofModal] = useState<boolean>(false);
  const [taskID, setTaskID] = useState<bigint | undefined>(undefined);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  //get price (EHT)
  const nativeCurrencyPrice = useGlobalState(state => state.nativeCurrency.price);

  //smart contract
  const { address: address } = useAccount();

  const { data: taskListWithoutResponsible, isLoading: isLoadingTaskWithoutResponsible } = useScaffoldReadContract({
    contractName: "TaskContract",
    functionName: "getTasksWithoutResponsible",
    account: address,
  });

  const { data: taskListData, isLoading: isLoadingTaskList } = useScaffoldReadContract({
    contractName: "TaskContract",
    functionName: "getTasksByResponsible",
    account: address,
  });

  const { data: adminAddress } = useScaffoldReadContract({
    contractName: "TaskContract",
    functionName: "admin",
  });

  const { writeContractAsync: writeTaskContractAsync } = useScaffoldWriteContract("TaskContract");

  const handleAcceptTask = async (taskID: bigint) => {
    try {
      setIsLoading(true);
      await writeTaskContractAsync({
        functionName: "acceptTask",
        args: [taskID],
        account: address,
      });
      setTaskSelected(undefined);
      setShowInfoTask(false);
    } catch (e) {
      console.error("Error setting greeting:", e);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      <ModalMetamask />
      {address !== undefined && adminAddress !== undefined && (
        <section className="container mx-auto px-2 py-4 bg-base mt-5">
          {showInfoTask && taskSelected !== undefined && (
            <ModalInfoTask
              address={address}
              taskSelected={taskSelected}
              isLoading={isLoading}
              nativeCurrencyPrice={nativeCurrencyPrice}
              setShowInfoTask={setShowInfoTask}
              setTaskSelected={setTaskSelected}
              handleAcceptTask={handleAcceptTask}
            />
          )}
          {showProofModal && taskID !== undefined && (
            <ModalTaskProof 
            address={address} 
            taskID={taskID} 
            setShowProofModal={setShowProofModal} 
            />
          )}

          {adminAddress !== address && (
            <>
              <h2 className="text-3xl font-semibold mb-4 text-center">Assigned Tasks</h2>
              <UserTaskList
                address={address}
                taskListData={taskListData}
                isLoadingTaskList={isLoadingTaskList}
                setShowInfoTask={setShowInfoTask}
                setTaskSelected={setTaskSelected}
                setShowProofModal={setShowProofModal}
                setTaskID={setTaskID}
              />
            </>
          )}

          <h2 className="text-3xl font-semibold mt-8 text-center">Available Tasks</h2>

          {taskListWithoutResponsible && taskListWithoutResponsible.length > 0 && (
            <div className="w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 lg:px-4">
              {taskListWithoutResponsible.map((x, y) => (
                <UserCardAvailableTask
                  key={y}
                  address={address}
                  adminAddress={adminAddress}
                  nativeCurrencyPrice={nativeCurrencyPrice}
                  taskListData={x}
                  setShowInfoTask={setShowInfoTask}
                  setTaskSelected={setTaskSelected}
                />
              ))}
            </div>
          )}
        </section>
      )}
    </>
  );
};

export default Home;

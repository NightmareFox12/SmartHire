"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import ModalTaskProof from "./_components/ModalTaskProof";
import UserCardAvailableTask from "./_components/UserCardAvailableTask";
import UserTaskList from "./_components/UserTaskList";
import { ITask } from "./_entity/Task.entity";
import type { NextPage } from "next";
import { useAccount } from "wagmi";
import { useReadContract } from "wagmi";
// import problem from "~~/../hardhat/artifacts/contracts/Problem.sol/Problem.json";
import ModalInfoTask from "~~/components/ModalInfoTask";
import ModalMetamask from "~~/components/ModalMetamask";
import { InputBase } from "~~/components/scaffold-eth";
import { useDeployedContractInfo, useScaffoldReadContract, useScaffoldWriteContract } from "~~/hooks/scaffold-eth";
import { useGlobalState } from "~~/services/store/store";
import { ArrowLeftCircleIcon } from "@heroicons/react/24/outline";

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

  const { data: taskListWithoutResponsible } = useScaffoldReadContract({
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

  //TODO: TESTING
  const { writeContractAsync: writeContractFactoryAsync } = useScaffoldWriteContract("ContractFactory");

  // const { data: que } = useScaffoldReadContract({
  //   contractName: "ContractFactory",
  //   functionName: "tastkContracts",
  //   args: [BigInt(0)],
  // });

  // const problemAbi = problem.abi;
  const [nameDao, setNameDao] = useState<string>("");

  const { data: daoAddress } = useScaffoldReadContract({
    contractName: "ContractFactory",
    functionName: "getContractAddress",
    args: [nameDao],
  });

  // const readContract2 = useReadContract({
  //   abi: problemAbi,
  //   account: address,
  //   address: contractAddress2,
  //   functionName: "problemAddress",
  // });

  // useEffect(() => {
  //   setContractAddress2(`${que}`);
  // }, [que]);

  // useEffect(() => {
  //   console.log(readContract2.data);
  // }, [readContract2]);

  const handleCreateContract = async () => {
    try {
      await writeContractFactoryAsync({
        functionName: "createContract",
        args: [nameDao],
        account: address,
      });
    } catch (err) {
      console.log(err);
    }
  };

  const [showForm, setShowForm] = useState<boolean>(false);

  return (
    <>
      {/* <ModalMetamask /> */}
      {/* <section className="flex-1 items-center flex justify-center">
        {!showForm && (
          <article className="w-9/12 p-5 flex justify-center flex-col gap-5">
            <div className="flex flex-1 items-center justify-center flex-col">
              <Image
                className="w-24 h-24 rounded-full"
                src="/favicon.png"
                alt="Smart Hire logo"
                width={30}
                height={30}
                objectFit="cover"
              />

              <h1 className="font-bold text-3xl">Smart Hire</h1>
            </div>

            <button className="btn btn-primary" onClick={() => setShowForm(!showForm)}>
              Create DAO
            </button>
            <button className="btn btn-primary">Access My DAO</button>
          </article>
        )}

        {showForm && (<>
          <div className="flex-1 ">
              <ArrowLeftCircleIcon className="w-4 h-4" />
            </div>
          
          <article className="w-9/12 p-5 flex justify-center flex-col gap-5">
      
            <InputBase value={nameDao} onChange={setNameDao} placeholder="DAO name" />
            {daoAddress !== undefined && !daoAddress.includes("0x000000") && (
              <span className="ps-2 text-error font-bold text-sm">The DAO already exist</span>
            )}
            <div className="px-10">
              <button className="btn btn-primary" onClick={() => handleCreateContract()}>
                Create DAO
              </button>
            </div>
          </article>
          </>
        )}
      </section> */}

      {/* {address !== undefined && adminAddress !== undefined && (
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
      )} */}
    </>
  );
};

export default Home;

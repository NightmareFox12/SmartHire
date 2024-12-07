"use client";

import UserCardAvailableTask from "./_components/UserCardAvailableTask";
import UserTaskList from "./_components/UserTaskList";
import type { NextPage } from "next";
import { useAccount } from "wagmi";
import ModalMetamask from "~~/components/ModalMetamask";
import { useScaffoldReadContract } from "~~/hooks/scaffold-eth";
import { useGlobalState } from "~~/services/store/store";

const Home: NextPage = () => {
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

  return (
    <>
      <ModalMetamask />
      {address !== undefined && adminAddress !== undefined && (
        <section className="container mx-auto px-2 py-4 bg-base mt-5">
          {adminAddress !== address && (
            <>
              <h2 className="text-3xl font-semibold mb-4 text-center">Assigned Tasks</h2>
              <UserTaskList address={address} taskListData={taskListData} isLoadingTaskList={isLoadingTaskList} />
            </>
          )}
          <h2 className="text-3xl font-semibold mt-8 text-center">Available Tasks</h2>

          {taskListWithoutResponsible && taskListWithoutResponsible.length > 0 && (
            <div className="w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {taskListWithoutResponsible.map(x => (
                <UserCardAvailableTask
                  key={x.taskID}
                  address={address}
                  adminAddress={adminAddress}
                  taskID={x.taskID}
                  name={x.name}
                  description={x.description}
                  reward={x.reward}
                  nativeCurrencyPrice={nativeCurrencyPrice}
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

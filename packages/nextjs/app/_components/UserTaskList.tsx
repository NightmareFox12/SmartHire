"use client";

import TaskListLoader from "../task/_components/TaskListLoader";
import UserCardAvailableTask from "./UserCardAvailableTask";
import { NextPage } from "next";
import { useAccount } from "wagmi";
import { useScaffoldReadContract } from "~~/hooks/scaffold-eth";
import { useGlobalState } from "~~/services/store/store";

const UserTaskList: NextPage = () => {
  const { address: address } = useAccount();
  const nativeCurrencyPrice = useGlobalState(state => state.nativeCurrency.price);

  const { data: taskListData, isLoading: isLoadingTaskList } = useScaffoldReadContract({
    contractName: "TaskContract",
    functionName: "getTasksByResponsible",
    account: address,
  });

  const { data: taskListWithoutResponsible, isLoading: isLoadingTaskWithoutResponsible } = useScaffoldReadContract({
    contractName: "TaskContract",
    functionName: "getTasksWithoutResponsible",
    account: address,
  });

  return (
    <section className="container mx-auto px-2 py-4 bg-base mt-5">
      <h2 className="text-3xl font-semibold mb-4 text-center">Assigned Tasks</h2>

      {isLoadingTaskList ? (
        <TaskListLoader items={10} />
      ) : taskListData !== undefined && taskListData.length > 0 ? (
        <div className="overflow-x-auto rounded-lg shadow-lg">
          <table className="min-w-full table-auto border-separate border-spacing-0 ">
            <thead>
              <tr className="bg-primary text-sm font-semibold text-left">
                <th className="px-4 py-3">Task Name</th>
                <th className="px-4 py-3">Description</th>
                <th className="px-4 py-3">Responsible</th>
                <th className="px-4 py-3">Status</th>
              </tr>
            </thead>
            <tbody>
              {taskListData?.map((task, index: number) => (
                <tr key={index} className={index % 2 === 0 ? "bg-base" : "bg-primary"}>
                  <td className="px-4 py-3 text-sm">{task.name}</td>
                  <td className="px-4 py-3 text-sm">{task.description}</td>
                  <td className="px-4 py-3 text-sm">{task.responsible}</td>
                  <td className="px-4 py-3 text-sm">
                    <span
                      className={`px-2 py-1 rounded-full ${
                        task.completed ? "bg-green-500 text-white" : "bg-yellow-400 text-gray-800"
                      }`}
                    >
                      {task.completed ? "Completed" : "Pending"}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      ) : (
        address !== undefined && <h3 className="text-center text-xl mt-10 font-semibold ">No tasks yet</h3>
      )}

      <h2 className="text-3xl font-semibold mt-8 text-center">Available Tasks</h2>

      {taskListWithoutResponsible && taskListWithoutResponsible.length > 0 && (
        <div className="w-full grid grid-cols-4 gap-4">
          {taskListWithoutResponsible.map(x => (
            <UserCardAvailableTask
              key={x.taskID}
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
  );
};

export default UserTaskList;

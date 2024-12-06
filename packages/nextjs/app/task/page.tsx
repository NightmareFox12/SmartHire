"use client";

import { useState } from "react";
import CardTaskCollapse from "./_components/CardTaskCollapse";
import ModalAdminOrAuditor from "./_components/ModalAdminOrAuditor";
import TaskListLoader from "./_components/TaskListLoader";
import { NextPage } from "next";
import { formatEther } from "viem";
import { useAccount } from "wagmi";
import { AdjustmentsHorizontalIcon } from "@heroicons/react/24/outline";
import ModalMetamask from "~~/components/ModalMetamask";
import { useScaffoldReadContract } from "~~/hooks/scaffold-eth";
import { useGlobalState } from "~~/services/store/store";

interface Ayuda {
  taskID: bigint;
  name: string;
  description: string;
  reward: bigint;
  responsible: string;
  completed: boolean;
}

const Task: NextPage = () => {
  const { address } = useAccount();
  const nativeCurrencyPrice = useGlobalState(state => state.nativeCurrency.price);

  const [filteredTasks, setFilteredTasks] = useState<Ayuda[] | undefined>(undefined);

  const { data: taskList, isLoading: isTaskListLoading } = useScaffoldReadContract({
    contractName: "TaskContract",
    functionName: "getAllTasks",
    account: address,
  });

  const handleTaskFilter = () => {
    const taskFiltered = taskList?.filter(task => task.responsible.includes("0x0000000000"));
    setFilteredTasks(taskFiltered);
  };

  return (
    <>
      <ModalMetamask />
      <ModalAdminOrAuditor />
      <h2 className="text-3xl p-2 font-medium text-center">Task List</h2>

      {isTaskListLoading ? (
        <TaskListLoader items={10} />
      ) : (
        <section className="overflow-x-hidden">
          {taskList !== undefined && (
            <div className="w-full flex justify-end px-2 lg:px-14">
              <details className="dropdown">
                <summary className="btn  btn-primary m-1 flex">
                  <AdjustmentsHorizontalIcon className="w-4 h-4" />
                  Filters
                  {filteredTasks !== undefined && (
                    <span className="bg-secondary rounded-full m-0 p-2 w-6 h-6 flex items-center justify-center text-xs leading-none">
                      1
                    </span>
                  )}
                </summary>
                <ul className="menu dropdown-content bg-base-100 rounded-box z-[1] w-28 lg:w-36 shadow">
                  <li
                    onClick={() => {
                      setFilteredTasks(undefined);
                    }}
                  >
                    <h5 className="text-sm">Clear Filter</h5>
                  </li>
                  <li
                    onClick={() => {
                      console.log("adkda");
                      handleTaskFilter();
                    }}
                  >
                    <h5 className="text-sm">Without Responsible</h5>
                  </li>
                </ul>
              </details>
            </div>
          )}

          <div className="w-full flex flex-col justify-center items-center px-1">
            {filteredTasks === undefined ? (
              taskList && taskList.length > 0 ? (
                taskList.map(x => (
                  <CardTaskCollapse
                    key={x.taskID}
                    taskID={x.taskID}
                    name={x.name}
                    description={x.description}
                    responsible={x.responsible}
                    reward={x.reward}
                  />
                ))
              ) : (
                <h3 className="text-center text-xl font-semibold select-none">No tasks available</h3>
              )
            ) : (
              filteredTasks !== undefined &&
              filteredTasks.map(x => (
                <CardTaskCollapse
                  key={x.taskID}
                  taskID={x.taskID}
                  name={x.name}
                  description={x.description}
                  responsible={x.responsible}
                  reward={x.reward}
                />
              ))
            )}
          </div>
        </section>
      )}
    </>
  );
};

export default Task;

// <div className="collapse bg-base-200 collapse-arrow" key={y}>
//   <input type="checkbox" />
//   <div className="collapse-title text-xl font-medium">
//     TaskID: {y + 1} {x.name}
//   </div>
//   <div className="collapse-content">
//     <p className="break-all">Description: {x.description}</p>
//     <p>Reward:</p>
//     <span className="text-[0.8em] font-bold mr-1">$</span>
//     <span>{(Number(formatEther(x.reward)) * nativeCurrencyPrice).toFixed(2)}</span>
//     <span>&nbsp;&nbsp;SEGUNDA OPORTUNINDAD{Number(formatEther(x.reward)).toFixed(4)}</span>
//   </div>
// </div>

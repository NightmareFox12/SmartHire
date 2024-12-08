"use client";

import { Dispatch, SetStateAction } from "react";
import TaskListLoader from "../task/_components/TaskListLoader";
import { ITask } from "../task/_entity/Task.entity";
import { NextPage } from "next";
import { Address } from "~~/components/scaffold-eth";

interface UserTaskListProps {
  address: string;
  taskListData: readonly ITask[] | undefined;
  isLoadingTaskList: boolean;
  setShowInfoTask: Dispatch<SetStateAction<boolean>>;
  setTaskSelected: Dispatch<SetStateAction<ITask | undefined>>;
  setShowProofModal: Dispatch<SetStateAction<boolean>>;
  setTaskID: Dispatch<SetStateAction<bigint | undefined>>;
}

const UserTaskList: NextPage<UserTaskListProps> = ({
  address,
  taskListData,
  isLoadingTaskList,
  setShowInfoTask,
  setTaskSelected,
  setShowProofModal,
  setTaskID,
}) => {
  return isLoadingTaskList ? (
    <TaskListLoader items={10} />
  ) : taskListData !== undefined && taskListData.length > 0 ? (
    <section className="flex justify-center mt-8">
      <table className="table w-full lg:w-11/12">
        <thead>
          <tr>
            <th className="px-4 py-3">Task Name</th>
            <th className="px-4 py-3">Description</th>
            <th className="px-4 py-3">Responsible</th>
            <th className="px-4 py-3">Actions</th>
          </tr>
        </thead>
        <tbody>
          {taskListData?.map((x, y) => (
            <tr className={y % 2 === 0 ? "bg-secondary" : "bg-primary"} key={y}>
              <td className="px-4 py-3 text-sm break-words">{x.name.slice(0, 12)}...</td>
              <td className="px-4 py-3 text-sm break-all">{x.description.slice(0, 12)}...</td>
              <td className="px-4 py-3 text-sm break-all md:break-normal">
                <Address address={x.responsible} format="short" />
              </td>
              <td className="flex flex-col items-center justify-center gap-1 md:flex-row md:gap-2">
                <button
                  className={`btn text-xs leading-none ${y % 2 === 0 ? "btn-primary" : "btn-secondary"}`}
                  onClick={() => {
                    setTaskID(x.taskID)
                    setShowProofModal(true);
                  }}
                >
                  complete
                </button>
                <button
                  className={`btn text-xs ${y % 2 === 0 ? "btn-primary" : "btn-secondary"}`}
                  onClick={() => {
                    setTaskSelected(x);
                    setShowInfoTask(true);
                  }}
                >
                  Show Details
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </section>
  ) : (
    address !== undefined && <h3 className="mt-10 text-xl font-semibold text-center ">No tasks yet</h3>
  );
};

export default UserTaskList;
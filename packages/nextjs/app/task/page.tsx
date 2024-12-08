"use client";

import { useState } from "react";
import ModalAdminOrAuditor from "../../components/ModalAdminOrAuditor";
import CardTaskCollapse from "./_components/CardTaskCollapse";
import FilterTaskButton from "./_components/FilterTaskButton";
import TaskListLoader from "./_components/TaskListLoader";
import { NextPage } from "next";
import { useAccount } from "wagmi";
import ModalMetamask from "~~/components/ModalMetamask";
import { useScaffoldReadContract } from "~~/hooks/scaffold-eth";
import { ITask } from "../_entity/Task.entity";

const Task: NextPage = () => {
  const { address } = useAccount();

  const [filteredTasks, setFilteredTasks] = useState<ITask[] | undefined>(undefined);

  const { data: taskList, isLoading: isTaskListLoading } = useScaffoldReadContract({
    contractName: "TaskContract",
    functionName: "getAllTasks",
    account: address,
  });

  return (
    <>
      <ModalMetamask />
      <ModalAdminOrAuditor />
      <h2 className="text-3xl p-2 font-medium text-center">Task List</h2>

      {isTaskListLoading ? (
        <TaskListLoader items={10} />
      ) : (
        <section className="overflow-x-hidden">
          {taskList !== undefined && taskList && taskList.length > 0 && (
            <FilterTaskButton setFilteredTasks={setFilteredTasks} filteredTasks={filteredTasks} taskList={taskList} />
          )}

          <div className="w-full flex mt-10 flex-col justify-center items-center px-1">
            {filteredTasks === undefined ? (
              taskList && taskList.length > 0 ? (
                taskList.map(x => (
                  <CardTaskCollapse
                    key={x.taskID}
                    taskListData={x}
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
                  taskListData={x}
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

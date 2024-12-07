import TaskListLoader from "../task/_components/TaskListLoader";
import { ITask } from "../task/_entity/Task.entity";
import { NextPage } from "next";

interface UserTaskListProps {
  address: string;
  taskListData: readonly ITask[] | undefined;
  isLoadingTaskList: boolean;
}

const UserTaskList: NextPage<UserTaskListProps> = ({ address, taskListData, isLoadingTaskList }) => {
  return isLoadingTaskList ? (
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
  );
};

export default UserTaskList;

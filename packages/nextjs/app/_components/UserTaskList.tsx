import TaskListLoader from "../task/_components/TaskListLoader";
import { ITask } from "../task/_entity/Task.entity";
import { NextPage } from "next";
import { Address } from "~~/components/scaffold-eth";

interface UserTaskListProps {
  address: string;
  taskListData: readonly ITask[] | undefined;
  isLoadingTaskList: boolean;
}

const UserTaskList: NextPage<UserTaskListProps> = ({ address, taskListData, isLoadingTaskList }) => {
  return isLoadingTaskList ? (
    <TaskListLoader items={10} />
  ) : taskListData !== undefined && taskListData.length > 0 ? (
    <section className="flex justify-center mt-8">
      <table className="table w-full ">
        <thead>
          <tr>
            <th className="px-4 py-3">Task Name</th>
            <th className="px-4 py-3">Description</th>
            <th className="px-4 py-3">Responsible</th>
            <th className="px-4 py-3">Status</th>
            <th className="px-4 py-3">Details</th>
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
              <td className="px-4 py-3 text-sm">
                <span
                  className={`px-2 py-1 rounded-full ${x.completed ? "bg-green-500 text-white" : "bg-yellow-400 text-gray-800"}`}
                >
                  {x.completed ? "Completed" : "Pending"}
                </span>
              </td>
              <td className="px-4 py-3 text-sm">
                <button className="btn btn-primary">Show Details</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </section>
  ) : (
    address !== undefined && <h3 className="text-center text-xl mt-10 font-semibold ">No tasks yet</h3>
  );
};

export default UserTaskList;

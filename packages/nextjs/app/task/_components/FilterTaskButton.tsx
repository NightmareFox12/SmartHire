import { Dispatch, SetStateAction } from "react";
import { ITask } from "../../_entity/Task.entity";
import { NextPage } from "next";
import { AdjustmentsHorizontalIcon } from "@heroicons/react/24/outline";

interface FilterTaskButtonProps {
  setFilteredTasks: Dispatch<SetStateAction<ITask[] | undefined>>;
  taskList: readonly ITask[];
  filteredTasks: ITask[] | undefined;
}

const FilterTaskButton: NextPage<FilterTaskButtonProps> = ({ setFilteredTasks, taskList, filteredTasks }) => {
  //functions
  const handleTaskFilter = (text: string | undefined) => {
    switch (text) {
      case "responsible": {
        setFilteredTasks(taskList?.filter(task => task.responsible.includes("0x0000000000")));
        break;
      }
      case undefined:
        setFilteredTasks(undefined);
        break;
    }
  };

  return (
    <div className="absolute w-full px-10 flex justify-end">
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
              handleTaskFilter(undefined);
            }}
          >
            <h5 className="text-sm">Clear Filter</h5>
          </li>
          <li
            onClick={() => {
              handleTaskFilter("responsible");
            }}
          >
            <h5 className="text-sm">Without Responsible</h5>
          </li>
        </ul>
      </details>
    </div>
  );
};

export default FilterTaskButton;

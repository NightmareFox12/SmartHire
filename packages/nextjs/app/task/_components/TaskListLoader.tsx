import { NextPage } from "next";

interface TaskListLoaderProps {
  items: number;
}

const TaskListLoader: NextPage<TaskListLoaderProps> = ({ items }) => {
  return (
    <div className="flex flex-col px-4 w-full gap-4">
      {Array.from({ length: items }, (_, index) => (
        <span key={index} className="skeleton h-10" />
      ))}
    </div>
  );
};

export default TaskListLoader;

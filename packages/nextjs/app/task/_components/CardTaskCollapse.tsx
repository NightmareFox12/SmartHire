"use client";

import { useState } from "react";
import ModalVerifyTask from "./ModalVerifyTask";
import { NextPage } from "next";
import { formatEther } from "viem";
import { CheckCircleIcon, ExclamationCircleIcon } from "@heroicons/react/24/outline";
import { Address } from "~~/components/scaffold-eth";
import { useScaffoldReadContract } from "~~/hooks/scaffold-eth";
import { useGlobalState } from "~~/services/store/store";
import { ITask } from "~~/app/_entity/Task.entity";

interface CollapsibleCardProps {
  taskListData: ITask;
}

const CardTaskCollapse: NextPage<CollapsibleCardProps> = ({ taskListData }) => {
  //states
  const [isExpanded, setIsExpanded] = useState<boolean>(false);
  const [showModalEdit, setShowModalEdit] = useState<boolean>(false);
  const [isDollar, setIsDollar] = useState<boolean>(false);

  //get price
  const nativeCurrencyPrice = useGlobalState(state => state.nativeCurrency.price);

  //smart contract
  const { data: taskCompleted } = useScaffoldReadContract({
    contractName: "TaskContract",
    functionName: "getCompletedTask",
    args: [taskListData.taskID],
  });

  return (
    <>
      {showModalEdit && taskCompleted !== undefined && (
        <ModalVerifyTask taskID={taskListData.taskID} taskCompleted={taskCompleted} setShowModalEdit={setShowModalEdit} />
      )}

      <article className="w-full my-5 md:px-5 lg:px-20 select-none overflow-hidden transition-all duration-300 ease-in-out">
        <div
          className={`px-6 flex justify-between cursor-pointer rounded-t-lg ${taskCompleted?.proof !== undefined && !taskCompleted.verified ? "bg-primary" : taskListData.completed && "bg-secondary"} bg-primary/80`}
        >
          <div className="flex-1 py-5" onClick={() => setIsExpanded(!isExpanded)}>
            <h3 className="text-xl font-bold text-center pr-2">{taskListData.name}</h3>
          </div>

          {taskListData.completed ? (
            <div className="py-5">
              <button className="btn btn-ghost" onClick={() => setShowModalEdit(!showModalEdit)}>
                <CheckCircleIcon className="h-8 w-8" />
              </button>
            </div>
          ) : (
            taskCompleted &&
            taskCompleted !== undefined &&
            taskCompleted.proof !== "" &&
            !taskCompleted.verified && (
              <div className="py-5">
                <button className="btn btn-secondary" onClick={() => setShowModalEdit(!showModalEdit)}>
                  <ExclamationCircleIcon className="h-4 w-4" />
                </button>
              </div>
            )
          )}
        </div>
        <div
          className={`lg:px-16 transition-all shadow-lg duration-300 ease-in-out ${isExpanded ? "mb-5 max-h-96" : "max-h-0 mb-0"}`}
        >
          <div className="flex flex-col items-center justify-center m-0 p-5">
            <h4 className="text-lg font-semibold m-0">Name</h4>
            <p className="break-words text-center">{taskListData.name}</p>

            <h4 className="text-lg font-semibold m-0">Description</h4>
            <p className="break-words text-center w-full">{taskListData.description}</p>

            <h4 className="text-lg font-semibold m-0">Rules</h4>
            <p className="break-words text-center">{taskListData.rules}</p>

            <h4 className="text-lg font-semibold mb-2">Responsible</h4>

            {taskListData.responsible.includes("0x00000000000000000000000000000") ? (
              <h4>No Responsible Assigned</h4>
            ) : (
              <div className="break-all md:break-normal text-center">
                <Address address={taskListData.responsible} format="long" disableAddressLink size="base" />
              </div>
            )}
            <h4 className="text-lg font-semibold m-0">Reward</h4>
            <p
              className="m-0 select-none cursor-pointer transition-all delay-75 ease-in-out"
              onClick={() => setIsDollar(!isDollar)}
            >
              {isDollar
                ? (Number(formatEther(taskListData.reward)) * nativeCurrencyPrice).toFixed(2) + " $"
                : Number(formatEther(taskListData.reward)).toFixed(6) + " ETH"}
            </p>
          </div>
        </div>
      </article>
    </>
  );
};

export default CardTaskCollapse;

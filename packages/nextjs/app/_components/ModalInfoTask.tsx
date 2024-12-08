"use client";

import { Dispatch, SetStateAction, useState } from "react";
import { ITask } from "../task/_entity/Task.entity";
import { NextPage } from "next";
import { formatEther } from "viem";
import { XMarkIcon } from "@heroicons/react/24/outline";
import { useWatchBalance } from "~~/hooks/scaffold-eth";

interface ModalInfoTaskProps {
  address: string;
  taskSelected: ITask;
  isLoading: boolean;
  nativeCurrencyPrice: number;
  setShowInfoTask: Dispatch<SetStateAction<boolean>>;
  setTaskSelected: Dispatch<SetStateAction<ITask | undefined>>;
  handleAcceptTask: (taskID: bigint) => Promise<void>;
}

const ModalInfoTask: NextPage<ModalInfoTaskProps> = ({
  address,
  taskSelected,
  isLoading,
  nativeCurrencyPrice,
  setShowInfoTask,
  setTaskSelected,
  handleAcceptTask,
}) => {
  const [isDollar, setIsDollar] = useState<boolean>(false);

  const { data: balance, isError, isLoading: isLoadingBalance } = useWatchBalance({ address });

  return (
    <dialog className="modal modal-open">
      <div className="w-11/12 max-w-5xl modal-box">
        <div className="flex justify-end">
          <button
            className="absolute transition-all btn btn-sm btn-circle right-2 top-2 hover:scale-110"
            onClick={() => {
              setTaskSelected(undefined);
              setShowInfoTask(false);
            }}
          >
            <XMarkIcon className="w-4 h-4" />
          </button>
        </div>

        <h2 className="text-lg font-bold text-center">{taskSelected.name}</h2>
        <p className="py-4 text-center">{taskSelected.description}</p>

        <h5 className="font-bold text-center">Reward</h5>
        <p
          className="pb-2 m-0 text-center transition-all ease-in-out delay-75 cursor-pointer select-none"
          onClick={() => setIsDollar(!isDollar)}
        >
          {isDollar
            ? (Number(formatEther(taskSelected.reward)) * nativeCurrencyPrice).toFixed(2) + " $"
            : Number(formatEther(taskSelected.reward)).toFixed(6) + " ETH"}
        </p>

        <h5 className="font-bold text-center">Rules</h5>

        <div className="flex justify-center modal-action">
          {taskSelected.responsible.includes("0x0000000000") ? (
            <button
              className="btn btn-primary"
              onClick={() => handleAcceptTask(taskSelected.taskID)}
              disabled={isLoading || balance?.value === 0n || isLoadingBalance}
            >
              Accept Task
            </button>
          ) : (
            <button
              className="btn btn-primary"
              onClick={() => {
                setTaskSelected(undefined);
                setShowInfoTask(false);
              }}
            >
              Close Modal
            </button>
          )}
        </div>
        {balance?.value === 0n && (
          <p className="m-0 text-sm font-bold text-center text-error">Insufficient balance</p>
        )}
      </div>
    </dialog>
  );
};
export default ModalInfoTask;
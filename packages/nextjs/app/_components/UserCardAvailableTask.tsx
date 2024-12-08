"use client";

import { Dispatch, SetStateAction, useState } from "react";
import { ITask } from "../_entity/Task.entity";
import { NextPage } from "next";
import { formatEther } from "viem";

interface UserCardAvailableTaskProps {
  address: string;
  adminAddress: string;
  nativeCurrencyPrice: number;
  taskListData: ITask;
  setShowInfoTask: Dispatch<SetStateAction<boolean>>;
  setTaskSelected: Dispatch<SetStateAction<ITask | undefined>>;
}

const UserCardAvailableTask: NextPage<UserCardAvailableTaskProps> = ({
  address,
  adminAddress,
  nativeCurrencyPrice,
  taskListData,
  setShowInfoTask,
  setTaskSelected,
}) => {
  const [isDollar, setIsDollar] = useState<boolean>(false);

  return (
    <div className="shadow-xl card bg-base-100">
      <div className="card-body">
        <h2 className="card-title">{taskListData.name}</h2>
        <p>{taskListData.description}</p>
        <p className="m-0">Reward</p>
        <p
          className="m-0 transition-all ease-in-out delay-75 cursor-pointer select-none"
          onClick={() => setIsDollar(!isDollar)}
        >
          {isDollar
            ? (Number(formatEther(taskListData.reward)) * nativeCurrencyPrice).toFixed(2) + " $"
            : Number(formatEther(taskListData.reward)).toFixed(6) + " ETH"}
        </p>
        <div className="justify-center card-actions">
          <button
            className="btn btn-primary"
            disabled={address === adminAddress}
            onClick={() => {
              setShowInfoTask(true);
              setTaskSelected(taskListData);
            }}
          >
            Show Details
          </button>
        </div>
      </div>
    </div>
  );
};

export default UserCardAvailableTask;
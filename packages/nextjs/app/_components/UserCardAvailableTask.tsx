"use client";

import { useState } from "react";
import { NextPage } from "next";
import { formatEther } from "viem";
import { useScaffoldWriteContract } from "~~/hooks/scaffold-eth";
import { useAccount } from "wagmi";

interface UserCardAvailableTaskProps {
  taskID: bigint;
  name: string;
  description: string;
  reward: bigint;
  nativeCurrencyPrice: number;
}

const UserCardAvailableTask: NextPage<UserCardAvailableTaskProps> = ({
  taskID,
  name,
  description,
  reward,
  nativeCurrencyPrice,
}) => {
  const {address: address} = useAccount()

  const { writeContractAsync: writeTaskContractAsync } = useScaffoldWriteContract("TaskContract");

  const [isDollar, setIsDollar] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const handleAcceptTask = async () => {
    try {
      setIsLoading(true);
      await writeTaskContractAsync({
        functionName: "acceptTask",
        args: [taskID],
        account: address
      });
    } catch (e) {
      console.error("Error setting greeting:", e);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="card bg-base-100 shadow-xl">
      <div className="card-body">
        <h2 className="card-title">{name}</h2>
        <p>{description}</p>
        <p className="m-0">Reward</p>
        <p
          className="m-0 select-none cursor-pointer transition-all delay-75 ease-in-out"
          onClick={() => setIsDollar(!isDollar)}
        >
          {isDollar
            ? (Number(formatEther(reward)) * nativeCurrencyPrice).toFixed(2) + " $"
            : Number(formatEther(reward)).toFixed(6) + " ETH"}
        </p>
        <div className="card-actions justify-center">
          <button className="btn btn-primary" onClick={() => handleAcceptTask()}>
            Accept task
          </button>
        </div>
      </div>
    </div>
  );
};

export default UserCardAvailableTask;

"use client";

import { useEffect, useState } from "react";
import { NextPage } from "next";
import { parseEther } from "viem";
import { getChainId } from "viem/actions";
import { useAccount, useBalance, useChainId } from "wagmi";
import { AddressInput, Balance, EtherInput, InputBase } from "~~/components/scaffold-eth";
import {
  useScaffoldReadContract,
  useScaffoldWriteContract,
  useTargetNetwork,
  useWatchBalance,
} from "~~/hooks/scaffold-eth";
import { useGlobalState } from "~~/services/store/store";

interface FormCreateTaskProps {
  address: string;
  adminAddress: string;
}

const FormCreateTask: NextPage<FormCreateTaskProps> = ({ address, adminAddress }) => {
  //form
  const [name, setName] = useState<string>("");
  const [description, setDescription] = useState<string>("");
  const [responsibleAddress, setResponsibleAddress] = useState<string>("");
  const [ethReward, setEthReward] = useState("");

  // States
  const [submitLoader, setSubmitLoader] = useState<boolean>(false);

  //smart contract
  const { targetNetwork } = useTargetNetwork();
  const nativeCurrencyPrice = useGlobalState(state => state.nativeCurrency.price);
  const { data: balance, isError, isLoading } = useWatchBalance({ address });

  const { writeContractAsync: writeTaskContractAsync } = useScaffoldWriteContract("TaskContract");

  // Functions
  const clearInputs = () => {
    setName("");
    setDescription("");
    setResponsibleAddress("");
    setEthReward("");
  };

  const handlePriceAlert = () => {};

  const handleCreateTask = async () => {
    try {
      setSubmitLoader(true);
      if (responsibleAddress === "") {
        await writeTaskContractAsync({
          functionName: "createTask",
          args: [name, description],
          value: parseEther(ethReward),
        });
      } else {
        await writeTaskContractAsync({
          functionName: "createTaskWithResponsible",
          args: [name, description, responsibleAddress],
          value: parseEther(ethReward),
        });
      }
      clearInputs();
    } catch (err) {
      console.error(err);
    } finally {
      setSubmitLoader(false);
    }
  };

  // Smart Contract
  const { data: taskID, isLoading: isTaskIDLoading } = useScaffoldReadContract({
    contractName: "TaskContract",
    functionName: "taskID",
  });

  const { data: isAuditor } = useScaffoldReadContract({
    contractName: "TaskContract",
    functionName: "getAuditorForAddress",
    args: [responsibleAddress],
  });

  return (
    <div className="flex justify-center items-start min-h-screen p-4 pt-10">
      <div className="w-full max-w-3x2 shadow-lg rounded-lg p-6 sm:p-8 md:p-12 lg:p-16">
        {isTaskIDLoading ? (
          <div className="mx-auto skeleton w-20 h-5 my-3" />
        ) : (
          <p className="text-center text-lg font-bold">Task ID: {taskID?.toString()}</p>
        )}

        <div className="flex flex-col justify-center gap-5">
          <div>
            <label className="font-bold ps-2" htmlFor="task-name">
              Task Name <span className="font-bold text-error text-sm">*</span>
            </label>
            <InputBase name="task-name" value={name} placeholder="Task Name" onChange={setName} />
          </div>

          <div className="flex flex-col">
            <label className="font-bold ps-2" htmlFor="task-description">
              Task Description <span className="font-bold text-error text-sm">*</span>
            </label>
            <textarea
              name="task-description"
              value={description}
              onChange={e => setDescription(e.target.value)}
              className="textarea border-base-300 border-2 bg-base-200 focus:outline-none text-opacity-50 dark:text-opacity-80 focus:border-base-300 placeholder:text-base-content/80 placeholder:text-[16px] text-base-content opacity-90 font-semibold"
              placeholder="Description"
            ></textarea>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-6 mt-6 md:grid-cols-2">
          <div>
            <label className="font-bold ps-2" htmlFor="responsible-address">
              Responsible Address
            </label>
            <AddressInput
              name="responsible-address"
              value={responsibleAddress}
              onChange={setResponsibleAddress}
              placeholder="Responsible Address (Optional)"
            />

            {adminAddress === responsibleAddress && (
              <span className="ps-2 text-error font-bold text-sm">The address is admin</span>
            )}
            {isAuditor && <span className="ps-2 text-error font-bold text-sm">The address is auditor</span>}
          </div>

          <div>
            <label className="font-bold ps-2" htmlFor="responsible-address">
              Reward <span className="font-bold text-error text-sm">*</span>
            </label>
            <EtherInput value={ethReward} onChange={setEthReward} placeholder="Reward" usdMode={true} />

            {balance && balance.value < parseEther(ethReward) && (
              <span className="ps-2 text-error font-bold text-sm">Insufficient balance</span>
            )}
            {isAuditor && <span className="ps-2 text-error font-bold text-sm">The address is auditor</span>}
          </div>
        </div>

        <div className="mt-8 flex justify-center">
          <button
            className={`btn w-full max-w-md ${submitLoader ? "btn-disabled" : "btn-primary"}`}
            onClick={handleCreateTask}
            disabled={
              submitLoader ||
              name.length <= 3 ||
              description.length <= 5 ||
              ethReward === "" ||
              responsibleAddress === adminAddress ||
              isAuditor ||
              balance?.value === 0n ||
              (balance && balance.value < parseEther(ethReward))
            }
          >
            {submitLoader ? (
              <>
                <span className="loading loading-spinner mr-2" /> Processing...
              </>
            ) : (
              "Create Task"
            )}
          </button>
        </div>
      </div>
    </div>
  );
};

export default FormCreateTask;

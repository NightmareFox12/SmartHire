"use client";

import { useState } from "react";
import { NextPage } from "next";
import { parseEther } from "viem";
import { AddressInput, EtherInput, InputBase } from "~~/components/scaffold-eth";
import { useScaffoldReadContract, useScaffoldWriteContract } from "~~/hooks/scaffold-eth";

const FormCreateTask: NextPage = () => {
  const [name, setName] = useState<string>("");
  const [description, setDescription] = useState<string>("");
  const [responsibleAddress, setResponsibleAddress] = useState<string>("");
  const [ethReward, setEthReward] = useState("");

  const { writeContractAsync: writeTaskContractAsync } = useScaffoldWriteContract("TaskContract");

  // States
  const [submitLoader, setSubmitLoader] = useState<boolean>(false);

  // Functions
  const clearInputs = () => {
    setName("");
    setDescription("");
    setResponsibleAddress("");
    setEthReward("");
  };

  // Smart Contract
  const { data: taskID, isLoading: isTaskIDLoading } = useScaffoldReadContract({
    contractName: "TaskContract",
    functionName: "taskID",
  });

  const createTask = async () => {
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

  return (
    <div className="flex justify-center items-start min-h-screen p-4 pt-10">
      <div className="w-full max-w-3x2 shadow-lg rounded-lg p-6 sm:p-8 md:p-12 lg:p-16">
        {isTaskIDLoading ? (
          <div className="mx-auto skeleton w-20 h-5 my-3" />
        ) : (
          <p className="text-center text-lg font-bold">Task ID: {taskID?.toString()}</p>
        )}

        <div className="flex flex-col justify-center gap-5">
          <InputBase value={name} placeholder="Task Name" onChange={setName} />

          <textarea
            value={description}
            onChange={e => setDescription(e.target.value)}
            className="textarea border-base-300 border-2 bg-base-200 focus:outline-none text-opacity-50 dark:text-opacity-80 focus:border-base-300 placeholder:text-base-300 placeholder:text-[16px] text-base-content opacity-90 font-semibold"
            placeholder="Description"
          ></textarea>
        </div>

        <div className="grid grid-cols-1 gap-6 mt-6 md:grid-cols-2">
          <AddressInput
            value={responsibleAddress}
            onChange={setResponsibleAddress}
            placeholder="Responsible Address (Optional)"
          />

          <EtherInput value={ethReward} onChange={setEthReward} placeholder="Reward" usdMode={true} />
        </div>

        <div className="mt-8 flex justify-center">
          <button
            className={`btn w-full max-w-md ${submitLoader ? "btn-disabled" : "btn-primary"}`}
            onClick={createTask}
            disabled={submitLoader || name.length <= 3 || description.length <= 5 || ethReward === ""}
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

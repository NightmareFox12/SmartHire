"use client";

import { Dispatch, SetStateAction, useState } from "react";
import { NextPage } from "next";
import { XMarkIcon } from "@heroicons/react/16/solid";
import { InputBase } from "~~/components/scaffold-eth";
import { useScaffoldWriteContract, useWatchBalance } from "~~/hooks/scaffold-eth";

interface ModalTaskProofProps {
  address: string;
  taskID: bigint;
  setShowProofModal: Dispatch<SetStateAction<boolean>>;
}
const ModalTaskProof: NextPage<ModalTaskProofProps> = ({ address, taskID, setShowProofModal }) => {
  //states
  const [proof, setProof] = useState<string>("");

  //smart contract
  const { data: balance, isError, isLoading: isLoadingBalance } = useWatchBalance({ address });

  const { writeContractAsync: writeTaskContractAsync } = useScaffoldWriteContract("TaskContract");

  //functions
  const handleSendProof = async () => {
    try {
      await writeTaskContractAsync({
        functionName: "completedTask",
        args: [taskID, proof],
        account: address,
      });
      setProof("");
      setShowProofModal(false);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <dialog className="modal modal-open">
<<<<<<< HEAD
      <div className="modal-box w-11/12 max-w-5xl">
        <div className="flex justify-end mb-4">
          <button
            className="btn btn-sm btn-circle absolute right-2 top-2 hover:scale-110 transition-all"
=======
      <div className="w-11/12 max-w-5xl modal-box">
        <div className="flex justify-end mb-4">
          <button
            className="absolute transition-all btn btn-sm btn-circle right-2 top-2 hover:scale-110"
>>>>>>> f5ec69b1517eeb69d2ad5d9b4cea3ba594ab8cb8
            onClick={() => {
              setShowProofModal(false);
            }}
          >
            <XMarkIcon className="w-4 h-4" />
          </button>
        </div>

<<<<<<< HEAD
        <div className="w-full flex justify-center">
          <p className="w-9/12 lg:w-7/12 text-justify font-bold">
=======
        <div className="flex justify-center w-full">
          <p className="w-9/12 font-bold text-justify lg:w-7/12">
>>>>>>> f5ec69b1517eeb69d2ad5d9b4cea3ba594ab8cb8
            Providing proof is essential for task completion. Examples of acceptable proof include links or materials
            specified in the task rules. The task will be verified by an auditor.
          </p>
        </div>

<<<<<<< HEAD
        <div className="w-full flex items-center justify-center">
          <div className="w-11/12">
            <label className="font-bold ps-2" htmlFor="task-name">
              Proof Task <span className="font-bold text-error text-sm">*</span>
            </label>
            <InputBase name="task-name" value={proof} placeholder="Proof" onChange={setProof} />
            {proof !== "" && proof.length < 5 && (
              <span className="ps-2 text-error font-bold text-sm">The proof must be at least 5 characters long.</span>
=======
        <div className="flex items-center justify-center w-full">
          <div className="w-11/12">
            <label className="font-bold ps-2" htmlFor="task-name">
              Proof Task <span className="text-sm font-bold text-error">*</span>
            </label>
            <InputBase name="task-name" value={proof} placeholder="Proof" onChange={setProof} />
            {proof !== "" && proof.length < 5 && (
              <span className="text-sm font-bold ps-2 text-error">The proof must be at least 5 characters long.</span>
>>>>>>> f5ec69b1517eeb69d2ad5d9b4cea3ba594ab8cb8
            )}
          </div>
        </div>

<<<<<<< HEAD
        <div className="modal-action flex justify-center">
=======
        <div className="flex justify-center modal-action">
>>>>>>> f5ec69b1517eeb69d2ad5d9b4cea3ba594ab8cb8
          <button
            className="btn btn-primary"
            disabled={proof === "" || proof.length < 5}
            onClick={() => {
              handleSendProof();
            }}
          >
            Send Proof
          </button>
        </div>
<<<<<<< HEAD
        {balance?.value === 0n && <p className="m-0 text-center text-error font-bold text-sm">Insufficient balance</p>}
=======
        {balance?.value === 0n && <p className="m-0 text-sm font-bold text-center text-error">Insufficient balance</p>}
>>>>>>> f5ec69b1517eeb69d2ad5d9b4cea3ba594ab8cb8
      </div>
    </dialog>
  );
};

export default ModalTaskProof;
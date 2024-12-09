"use client";

import { Dispatch, SetStateAction } from "react";
import { NextPage } from "next";
import { useAccount } from "wagmi";
import { XMarkIcon } from "@heroicons/react/24/outline";
import { ItaskCompleted } from "~~/app/_entity/Task.entity";
import { useScaffoldWriteContract } from "~~/hooks/scaffold-eth";

interface ModalVerifyTaskProps {
  taskCompleted: ItaskCompleted;
  setShowModalEdit: Dispatch<SetStateAction<boolean>>;
}

const ModalVerifyTask: NextPage<ModalVerifyTaskProps> = ({ taskCompleted, setShowModalEdit }) => {
  const { address } = useAccount();

  //smart contract
  const { writeContractAsync: writeTaskContractAsync } = useScaffoldWriteContract("TaskContract");

  //functions
  const handleVerifyTask = async (verified: boolean) => {
    try {
      await writeTaskContractAsync({
        functionName: "verifiedTask",
        args: [taskCompleted.taskCompletedID, verified],
        account: address,
      });
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <dialog className="modal modal-open">
      <div className="modal-box">
        <div className="flex justify-between px-1 ">
          <h3 className="font-bold text-lg">Hello!</h3>
          <button className="btn btn-primary" onClick={() => setShowModalEdit(false)}>
            <XMarkIcon className="w-4 h-4" />
          </button>
        </div>

        <h4 className="text-xl font-bold text-center">Proof the task</h4>

        <a className="text-center block" href={taskCompleted.proof}>
          {taskCompleted.proof}
        </a>

        <div className="modal-action justify-center">
          {taskCompleted.verified ? (
            <button className="btn btn-secondary" onClick={() => setShowModalEdit(false)}>
              Close Details
            </button>
          ) : (
            <>
              <button className="btn btn-primary" onClick={() => handleVerifyTask(false)}>
                reject task
              </button>
              <button className="btn btn-primary" onClick={() => handleVerifyTask(true)}>
                Verify Task
              </button>
            </>
          )}
        </div>
      </div>
    </dialog>
  );
};

export default ModalVerifyTask;

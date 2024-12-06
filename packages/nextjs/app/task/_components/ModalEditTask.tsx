"use client";

import { Dispatch, SetStateAction, useEffect, useRef, useState } from "react";
import { NextPage } from "next";
import { useRouter } from "next-nprogress-bar";
import { useAccount } from "wagmi";
import FormCreateTask from "~~/app/create-task/_components/FormCreateTask";
import { useScaffoldReadContract } from "~~/hooks/scaffold-eth";
import { XMarkIcon } from "@heroicons/react/24/outline";

interface ModalEditTaskProps {
  showModalEdit: boolean;
  setShowModalEdit: Dispatch<SetStateAction<boolean>>;
  taskID: bigint;
  name: string;
  description: string;
  responsible: string;
  reward: bigint;
}

const ModalEditTask: NextPage<ModalEditTaskProps> = ({
  showModalEdit,
  taskID,
  name,
  description,
  responsible,
  reward,
  setShowModalEdit,
}) => {
  const router = useRouter();
  const { address } = useAccount();

  // const { data: adminAddress } = useScaffoldReadContract({
  //   contractName: "TaskContract",
  //   functionName: "admin",
  // });

  // const { data: isAuditor } = useScaffoldReadContract({
  //   contractName: "TaskContract",
  //   functionName: "getAuditorForAddress",
  //   args: [address],
  // });

  // useEffect(() => {
  //   setShowModal(
  //     address !== undefined &&
  //       adminAddress !== undefined &&
  //       isAuditor != undefined &&
  //       address !== adminAddress &&
  //       !isAuditor,
  //   );
  // }, [address, adminAddress, isAuditor]);

  return (
    <dialog className="modal modal-open">
      <div className="modal-box">
        <div className="flex justify-between px-1 ">
          <h3 className="font-bold text-lg">Hello!</h3>
          <button className="btn btn-primary" onClick={() => setShowModalEdit(false)}>
            <XMarkIcon className="w-4 h-4"/>
          </button>
        </div>
        <p className="py-4">Press ESC key or click outside to close</p>
      </div>
    </dialog>
  );
};

export default ModalEditTask;

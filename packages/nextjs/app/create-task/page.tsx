"use client";

import FormCreateTask from "./_components/FormCreateTask";
import { NextPage } from "next";
import { useAccount } from "wagmi";
import ModalAdmin from "~~/components/ModalAdmin";
import ModalMetamask from "~~/components/ModalMetamask";
import { useScaffoldReadContract } from "~~/hooks/scaffold-eth";

const CreateTask: NextPage = () => {
  const { address } = useAccount();

  const { data: adminAddress } = useScaffoldReadContract({
    contractName: "TaskContract",
    functionName: "admin",
  });

  return (
    <>
      <ModalAdmin />
      <ModalMetamask />
      {address !== undefined && adminAddress !== undefined && address === adminAddress && (
        <>
          <h2 className="text-3xl p-2 font-medium text-center">Create Task</h2>
          <FormCreateTask />
        </>
      )}
    </>
  );
};

export default CreateTask;

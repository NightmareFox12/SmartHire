"use client";

import { NextPage } from "next";
import { useAccount } from "wagmi";
import ModalAdminOrAuditor from "~~/components/ModalAdminOrAuditor";
import ModalMetamask from "~~/components/ModalMetamask";
import { useScaffoldReadContract } from "~~/hooks/scaffold-eth";
import AddUserInput from "./_components/AddUserInput";
import ListUser from "./_components/ListUser";

const ConfigUser: NextPage = () => {
  const { address } = useAccount();

  const { data: adminAddress } = useScaffoldReadContract({
    contractName: "TaskContract",
    functionName: "admin",
  });

  return (
    <>
      <ModalMetamask />
      <ModalAdminOrAuditor/>
      {address !== undefined && adminAddress !== undefined && address === adminAddress && (
        <>
          <h2 className="text-center text-2xl font-bold p-2">Config Auditors</h2>
          <AddUserInput />
          <ListUser address={address} />
        </>
      )}
    </>
  );
};

export default ConfigUser;

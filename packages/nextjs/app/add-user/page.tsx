"use client";

import AddUserInput from "./_components/AddUserInput";
import ListUser from "./_components/ListUser";
import { NextPage } from "next";
import { useAccount } from "wagmi";
import ModalAdminOrAuditor from "~~/components/ModalAdminOrAuditor";
import ModalMetamask from "~~/components/ModalMetamask";
import { useScaffoldReadContract } from "~~/hooks/scaffold-eth";

const ConfigUser: NextPage = () => {
  const { address } = useAccount();

  const { data: adminAddress } = useScaffoldReadContract({
    contractName: "TaskContract",
    functionName: "admin",
  });

  const { data: isAuditor } = useScaffoldReadContract({
    contractName: "TaskContract",
    functionName: "getAuditorForAddress",
    args: [address],
  });

  return (
    <>
      <ModalMetamask />
      <ModalAdminOrAuditor />
      {address !== undefined && adminAddress !== undefined && (address === adminAddress || isAuditor) && (
        <>
          <h2 className="text-center text-2xl font-bold p-2">Config Users</h2>
          <AddUserInput address={address} />
          <ListUser address={address} />
        </>
      )}
    </>
  );
};

export default ConfigUser;

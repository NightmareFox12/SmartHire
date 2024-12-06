"use client";

import AddAuditorInput from "./_components/AddAuditorInput";
import ListAuditor from "./_components/ListAuditor";
import { NextPage } from "next";
import { useAccount } from "wagmi";
import ModalAdmin from "~~/components/ModalAdmin";
import ModalMetamask from "~~/components/ModalMetamask";
import { useScaffoldReadContract } from "~~/hooks/scaffold-eth";

const ConfigAuditor: NextPage = () => {
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
          <h2 className="text-center text-2xl font-bold p-2">Config Auditors</h2>
          <AddAuditorInput />
          <ListAuditor address={address} />
        </>
      )}
    </>
  );
};

export default ConfigAuditor;

"use client";

import { useState } from "react";
import { NextPage } from "next";
import { AddressInput } from "~~/components/scaffold-eth";
import { useScaffoldWriteContract } from "~~/hooks/scaffold-eth";

const AddAuditorInput: NextPage = () => {
  const [auditorAddress, setAuditorAddress] = useState<string>("");
  const [addAuditorLoading, setAddAuditorLoading] = useState<boolean>(false);

  //smart contract
  const { writeContractAsync: writeContractAsync } = useScaffoldWriteContract("TaskContract");

  const handleAddAuditor = async () => {
    try {
      setAddAuditorLoading(true);

      await writeContractAsync({
        functionName: "addAuditor",
        args: [auditorAddress],
      });

      setAuditorAddress("");
    } catch (err) {
      console.log(err);
    } finally {
      setAddAuditorLoading(false);
    }
  };

  return (
    <section className="flex flex-col justify-center gap-2 px-4">
      <AddressInput value={auditorAddress} onChange={setAuditorAddress} placeholder="Auditor address" />

      <button
        className="btn btn-primary mx-5"
        onClick={handleAddAuditor}
        disabled={addAuditorLoading || auditorAddress === ""}
      >
        {addAuditorLoading ? (
          <>
            <span className="loading loading-spinner" /> Loading
          </>
        ) : (
          "Add Auditor"
        )}
      </button>
    </section>
  );
};

export default AddAuditorInput;

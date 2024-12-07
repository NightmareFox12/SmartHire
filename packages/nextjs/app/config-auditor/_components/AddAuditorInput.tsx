"use client";

import { useState } from "react";
import { NextPage } from "next";
import { AddressInput } from "~~/components/scaffold-eth";
import { useScaffoldReadContract, useScaffoldWriteContract } from "~~/hooks/scaffold-eth";

const AddAuditorInput: NextPage = () => {
  const [auditorAddress, setAuditorAddress] = useState<string>("");
  const [addAuditorLoading, setAddAuditorLoading] = useState<boolean>(false);

  //smart contract
  const { writeContractAsync: writeContractAsync } = useScaffoldWriteContract("TaskContract");
  const { data: addressAdmin } = useScaffoldReadContract({
    contractName: "TaskContract",
    functionName: "admin",
  });

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
    <section className="flex flex-col justify-center items-center w-full px-5 gap-3">
      <div className="md:w-96 lg:w-7/12">
        <label className="font-bold ps-2" htmlFor="auditor-address">
          Auditor Address <span className="font-bold text-error text-sm">*</span>
        </label>
        <AddressInput
          name="auditor-address"
          value={auditorAddress}
          onChange={setAuditorAddress}
          placeholder="Auditor address"
        />
        {auditorAddress === addressAdmin && (
          <span className="ps-2 text-error font-bold text-sm">The address is admin</span>
        )}
      </div>

      <div className="md:w-96 lg:w-7/12">
        <button
          className="btn btn-primary w-full"
          onClick={handleAddAuditor}
          disabled={addAuditorLoading || auditorAddress === "" || auditorAddress === addressAdmin}
        >
          {addAuditorLoading ? (
            <>
              <span className="loading loading-spinner" /> Loading
            </>
          ) : (
            "Add Auditor"
          )}
        </button>
      </div>
    </section>
  );
};

export default AddAuditorInput;

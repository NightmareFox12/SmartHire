"use client";

import { useState } from "react";
import { NextPage } from "next";
import { AddressInput } from "~~/components/scaffold-eth";
import { useScaffoldWriteContract } from "~~/hooks/scaffold-eth";

type AddUserInputProps = {
  address: string;
};

const AddUserInput: NextPage<AddUserInputProps> = ({ address }) => {
  const [userAddress, setUserAddress] = useState<string>("");
  const [addUserLoading, setAddUserLoading] = useState<boolean>(false);

  //smart contract
  const { writeContractAsync: writeContractAsync } = useScaffoldWriteContract("TaskContract");

  const handleAddAuditor = async () => {
    try {
      setAddUserLoading(true);

      await writeContractAsync({
        functionName: "addUser",
        args: [userAddress],
        account: address,
      });

      setUserAddress("");
    } catch (err) {
      console.log(err);
    } finally {
      setAddUserLoading(false);
    }
  };

  return (
    <section className="flex flex-col justify-center gap-2 px-4 sm:px-12">
      <AddressInput value={userAddress} onChange={setUserAddress} placeholder="User address" />

      <button
        className="btn btn-primary mx-5"
        onClick={handleAddAuditor}
        disabled={addUserLoading || userAddress === ""}
      >
        {addUserLoading ? (
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

export default AddUserInput;

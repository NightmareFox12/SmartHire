"use client";

import { useState } from "react";
import { NextPage } from "next";
import { AddressInput } from "~~/components/scaffold-eth";
import { useScaffoldReadContract, useScaffoldWriteContract } from "~~/hooks/scaffold-eth";

type AddUserInputProps = {
  address: string;
};

const AddUserInput: NextPage<AddUserInputProps> = ({ address }) => {
  const [userAddress, setUserAddress] = useState<string>("");
  const [addUserLoading, setAddUserLoading] = useState<boolean>(false);

  //smart contract
  const { writeContractAsync: writeContractAsync } = useScaffoldWriteContract("TaskContract");

  const { data: addressAdmin } = useScaffoldReadContract({
    contractName: "TaskContract",
    functionName: "admin",
  });

  const handleAddUser = async () => {
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
    <section className="flex flex-col justify-center items-center w-full px-5 gap-3">
      <div className="md:w-96 lg:w-7/12">
        <AddressInput value={userAddress} onChange={setUserAddress} placeholder="User address" />
      </div>

      <div className="md:w-96 lg:w-7/12">
        <button
          className="btn btn-primary w-full"
          onClick={handleAddUser}
          disabled={addUserLoading || userAddress === "" || userAddress === addressAdmin}
        >
          {addUserLoading ? (
            <>
              <span className="loading loading-spinner" /> Loading
            </>
          ) : (
            "Add User"
          )}
        </button>
      </div>
    </section>
  );
};

export default AddUserInput;

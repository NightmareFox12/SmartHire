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

  const { data: existUser } = useScaffoldReadContract({
    contractName: "TaskContract",
    functionName: "getUserForAddress",
    args: [userAddress],
  });

  const { data: existAuditor } = useScaffoldReadContract({
    contractName: "TaskContract",
    functionName: "getAuditorForAddress",
    args: [userAddress],
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
        <label className="font-bold ps-2" htmlFor="user-address">
          User Address <span className="font-bold text-error text-sm">*</span>
        </label>
        <AddressInput name="user-address" value={userAddress} onChange={setUserAddress} placeholder="User address" />
        {userAddress === addressAdmin && (
          <span className="ps-2 text-error font-bold text-sm">The address is admin</span>
        )}
        {(existAuditor || existUser) && (
          <span className="ps-2 text-error font-bold text-sm">
            The address is already {existAuditor ? "auditor" : "user"}
          </span>
        )}
      </div>

      <div className="md:w-96 lg:w-7/12">
        <button
          className="btn btn-primary w-full"
          onClick={handleAddUser}
          disabled={addUserLoading || userAddress === "" || userAddress === addressAdmin || existUser || existAuditor}
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

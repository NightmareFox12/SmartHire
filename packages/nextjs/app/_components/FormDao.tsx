"use client";

import { Dispatch, SetStateAction, useState } from "react";
import Image from "next/image";
import { ConnectButton } from "@rainbow-me/rainbowkit";
import { NextPage } from "next";
import { useAccount } from "wagmi";
import { ArrowLeftIcon } from "@heroicons/react/24/outline";
import { InputBase } from "~~/components/scaffold-eth";
import { useScaffoldReadContract, useScaffoldWriteContract } from "~~/hooks/scaffold-eth";
import { DAO_ADDRESS_KEY } from "~~/constants/constants";

interface FormDaoProps {
  setIsDaoExist: Dispatch<SetStateAction<boolean>>;
}

const FormDao: NextPage<FormDaoProps> = ({ setIsDaoExist }) => {
  //states
  const { address } = useAccount();

  const [nameDao, setNameDao] = useState<string>("");
  const [showForm, setShowForm] = useState<boolean>(false);
  const [loadingCreation, setLoadingCreation] = useState<boolean>(false);

  //smart contract
  const { writeContractAsync: writeContractFactoryAsync } = useScaffoldWriteContract("ContractFactory");

  const { data: daoAddress, isLoading: loadingDaoAddress } = useScaffoldReadContract({
    contractName: "ContractFactory",
    functionName: "getContractAddress",
    args: [nameDao],
  });

  const handleCreateContract = async () => {
    try {
      setLoadingCreation(true);
      const daoAddress = await writeContractFactoryAsync({
        functionName: "createContract",
        args: [nameDao],
        account: address,
      });

      window.localStorage.setItem(DAO_ADDRESS_KEY, daoAddress!!.toString());

      setIsDaoExist(true);
    } catch (err) {
      console.log(err);
    } finally {
      setLoadingCreation(false);
    }
  };

  return (
    <section className={`${!showForm && "items-center justify-center"} flex-1 flex p-1`}>
      {!showForm && (
        <article className="w-9/12 p-5 flex justify-center flex-col gap-5">
          <div className="flex flex-1 items-center justify-center flex-col">
            <Image
              className="w-24 h-24 rounded-full"
              src="/favicon.png"
              alt="Smart Hire logo"
              width={30}
              height={30}
              objectFit="cover"
            />

            <h1 className="font-bold text-3xl">Smart Hire</h1>
          </div>

          <button className="btn btn-primary" onClick={() => setShowForm(!showForm)}>
            Create DAO
          </button>
          <button className="btn btn-primary">Access My DAO</button>

          <div className="w-full flex flex-1 justify-center">
            <ConnectButton />
          </div>
        </article>
      )}

      {showForm && (
        <>
          <button className="btn btn-circle btn-primary" onClick={() => setShowForm(!showForm)}>
            <ArrowLeftIcon className="w-6 h-6" />
          </button>

          <article className="w-full sm:w-9/12 p-5 flex justify-center flex-col gap-5">
            <div>
              <InputBase value={nameDao} onChange={setNameDao} placeholder="DAO name" />
              {daoAddress !== undefined && !daoAddress.includes("0x0000000") && (
                <span className="ps-2 text-error font-bold text-sm">The DAO already exist</span>
              )}
            </div>
            <button
              className="btn btn-primary"
              onClick={() => handleCreateContract()}
              disabled={
                loadingDaoAddress || loadingCreation || (daoAddress !== undefined && !daoAddress.includes("0x0000000"))
              }
            >
              {loadingCreation ? (
                <>
                  <span className="loading loading-spinner w-5 h-5" /> Loading...
                </>
              ) : (
                "Create DAO"
              )}
            </button>
          </article>
        </>
      )}
    </section>
  );
};

export default FormDao;

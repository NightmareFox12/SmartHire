"use client";

import { useState } from "react";
import ModalEditTask from "./ModalEditTask";
import { NextPage } from "next";
import { formatEther } from "viem";
import { PencilSquareIcon } from "@heroicons/react/24/outline";
import { Address, AddressInput } from "~~/components/scaffold-eth";
import { useGlobalState } from "~~/services/store/store";

interface CollapsibleCardProps {
  taskID: bigint;
  name: string;
  description: string;
  responsible: string;
  reward: bigint;
}

const CardTaskCollapse: NextPage<CollapsibleCardProps> = ({ taskID, name, description, responsible, reward }) => {
  //states
  const [isExpanded, setIsExpanded] = useState<boolean>(false);
  const [addressResponsible, setAddressResponsible] = useState<string>("");
  const [showModalEdit, setShowModalEdit] = useState<boolean>(false);
  const [isDollar, setIsDollar] = useState<boolean>(false);

  //get price
  const nativeCurrencyPrice = useGlobalState(state => state.nativeCurrency.price);

  return (
    <>
      {showModalEdit && (
        <ModalEditTask
          showModalEdit={showModalEdit}
          setShowModalEdit={setShowModalEdit}
          taskID={taskID}
          name={name}
          description={description}
          responsible={responsible}
          reward={reward}
        />
      )}

      <div className="w-full my-5 md:px-5 lg:px-20 select-none overflow-hidden transition-all duration-300 ease-in-out">
        <div className="px-6 flex justify-between bg-primary cursor-pointer rounded-t-lg">
          <div className="flex-1 py-5" onClick={() => setIsExpanded(!isExpanded)}>
            <h3 className="text-xl font-bold text-center pr-2">{name}</h3>
          </div>

          <div className="py-5">
            <button className="btn btn-secondary" onClick={() => setShowModalEdit(!showModalEdit)}>
              <PencilSquareIcon className="h-4 w-4" />
            </button>
          </div>
        </div>
        <div
          className={`lg:px-16 transition-all shadow-lg duration-300 ease-in-out ${isExpanded ? "mb-5 max-h-96" : "max-h-0 mb-0"}`}
        >
          <div className="flex flex-col items-center justify-center m-0 p-5">
            <h4 className="text-lg font-semibold m-0">Name</h4>
            <p className="break-words text-center">{name}</p>
            <h4 className="text-lg font-semibold m-0">Description</h4>
            <p className="break-words text-center w-full">{description}</p>
            <h4 className="text-lg font-semibold mb-2">Responsible</h4>

            {responsible.includes("0x00000000000000000000000000000") ? (
              <h4>No Responsible Assigned</h4>
            ) : (
              <div className="break-all md:break-normal text-center">
                <Address address={responsible} format="long" disableAddressLink size="base" />
              </div>
            )}
            <h4 className="text-lg font-semibold m-0">Reward</h4>
            <p
              className="m-0 select-none cursor-pointer transition-all delay-75 ease-in-out"
              onClick={() => setIsDollar(!isDollar)}
            >
              {isDollar
                ? (Number(formatEther(reward)) * nativeCurrencyPrice).toFixed(2) + " $"
                : Number(formatEther(reward)).toFixed(6) + " ETH"}
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default CardTaskCollapse;

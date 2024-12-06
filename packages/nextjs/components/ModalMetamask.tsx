"use client";

import { useEffect, useState } from "react";
import { RainbowKitCustomConnectButton } from "./scaffold-eth";
import { NextPage } from "next";
import { useAccount } from "wagmi";

const ModalMetamask: NextPage = () => {
  const { address: connectedAddress } = useAccount();
  const [showModal, setShowModal] = useState<boolean>(false);

  useEffect(() => {
    setShowModal(connectedAddress === undefined);
  }, [connectedAddress]);

  return (
    <>
      {showModal && (
        <div className="modal modal-open" role="dialog">
          <div className="modal-box">
            <h3 className="text-2xl font-bold">MetaMask account not connected 🧐</h3>
            <p className="py-4">Please connect your Metamask to view your information. 🤓</p>
            <div className="flex justify-center w-full">
              <RainbowKitCustomConnectButton />
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default ModalMetamask;

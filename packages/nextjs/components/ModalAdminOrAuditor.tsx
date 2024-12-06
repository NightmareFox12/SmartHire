"use client";

import { useEffect, useState } from "react";
import { NextPage } from "next";
import { useRouter } from "next-nprogress-bar";
import { useAccount } from "wagmi";
import { useScaffoldReadContract } from "~~/hooks/scaffold-eth";

const ModalAdminOrAuditor: NextPage = () => {
  const router = useRouter();
  const { address } = useAccount();

  const [showModal, setShowModal] = useState<boolean>(false);

  const { data: adminAddress } = useScaffoldReadContract({
    contractName: "TaskContract",
    functionName: "admin",
  });

  const { data: isAuditor } = useScaffoldReadContract({
    contractName: "TaskContract",
    functionName: "getAuditorForAddress",
    args: [address],
  });

  useEffect(() => {
    setShowModal(
      address !== undefined &&
        adminAddress !== undefined &&
        isAuditor != undefined &&
        address !== adminAddress &&
        !isAuditor,
    );
  }, [address, adminAddress, isAuditor]);

  return (
    <>
      {showModal && (
        <div className="modal modal-open" role="dialog">
          <div className="modal-box">
            <h3 className="text-2xl font-bold">Access Denied 🚫</h3>
            <p className="py-4">
              Your account does not have administrative privileges. Only administrators and auditors can access this section. 🛑
            </p>
            <div className="flex justify-center w-full">
              <button className="btn btn-primary" onClick={() => router.push("/")}>
                Go back
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default ModalAdminOrAuditor;

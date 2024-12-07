"use client";

import AuditorListLoader from "../../../components/ListLoader";
import { NextPage } from "next";
import { Address } from "~~/components/scaffold-eth";
import { useScaffoldReadContract, useScaffoldWriteContract } from "~~/hooks/scaffold-eth";

type ListAuditorProps = {
  address: string;
};

const ListAuditor: NextPage<ListAuditorProps> = ({ address }) => {
  //smart contract
  const { data: auditorListData } = useScaffoldReadContract({
    contractName: "TaskContract",
    functionName: "getAllAuditors",
    account: address,
  });

  const { writeContractAsync: writeContractAsync } = useScaffoldWriteContract("TaskContract");

  const blockAuditor = async (auditID: bigint) => {
    try {
      await writeContractAsync({
        functionName: "blockAuditor",
        args: [auditID],
        account: address,
      });
    } catch (err) {
      console.log(err);
    }
  };

  const unlockAuditor = async (auditID: bigint) => {
    try {
      await writeContractAsync({
        functionName: "unlockAuditor",
        args: [auditID],
        account: address,
      });
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <section className="flex justify-center mt-8">
      {auditorListData !== undefined ? (
        <table className="table w-96 lg:w-7/12">
          <thead>
            <tr>
              <th></th>
              <th>Address</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {auditorListData.map((x, y) => (
              <tr className={x.block ? "bg-secondary" : "bg-primary"} key={y}>
                <th>{y + 1}</th>
                <td className="break-all md:break-normal">
                  <Address address={x.auditorAddress} format="long" />
                </td>
                <td className="sm:flex">
                  {x.block ? (
                    <button className="btn bg-primary" onClick={() => unlockAuditor(x.auditorID)}>
                      Unlock
                    </button>
                  ) : (
                    <button className="btn bg-error" onClick={() => blockAuditor(x.auditorID)}>
                      Block
                    </button>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <AuditorListLoader items={5} />
      )}
    </section>
  );
};

export default ListAuditor;

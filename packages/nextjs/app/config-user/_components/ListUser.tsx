"use client";

import { NextPage } from "next";
import ListLoader from "~~/components/ListLoader";
import { useScaffoldReadContract, useScaffoldWriteContract } from "~~/hooks/scaffold-eth";

type ListUserProps = {
  address: string;
};

const ListUser: NextPage<ListUserProps> = ({ address }) => {
  //contract
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
    <section className="px-2">
      {auditorListData !== undefined ? (
        <table className="table break-all">
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
                <td>{x.auditorAddress.toString()}</td>
                <td className="sm:flex">
                  {x.block ? (
                    <button className="btn bg-accent" onClick={() => unlockAuditor(x.auditorID)}>
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
        <ListLoader items={5} />
      )}
    </section>
  );
};

export default ListUser;

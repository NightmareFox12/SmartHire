"use client";

import { NextPage } from "next";
import ListLoader from "~~/components/ListLoader";
import { Address, Balance } from "~~/components/scaffold-eth";
import { useScaffoldReadContract } from "~~/hooks/scaffold-eth";

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

  return (
    <section className="flex justify-center mt-8">
      {auditorListData !== undefined ? (
        <table className="table w-96 lg:w-7/12">
          <thead>
            <tr>
              <th></th>
              <th>Address</th>
              <th>Balance</th>
            </tr>
          </thead>
          <tbody>
            {auditorListData.map((x, y) => (
              <tr className={y % 2 == 0 ? "bg-secondary" : "bg-primary"} key={y}>
                <th>{y + 1}</th>
                <td className="break-all md:break-normal">
                  <Address address={x.auditorAddress} format="long" />
                </td>
                <td>
                  <Balance address={x.auditorAddress} />
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

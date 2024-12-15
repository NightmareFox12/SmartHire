"use client";

import { useEffect } from "react";
import { DAO_ADDRESS_KEY } from "../../constants/constants";
import { NextPage } from "next";
import { useRouter } from "next-nprogress-bar";
import { useData } from "~~/context/DataTestProvider";

const CloseSession: NextPage = () => {
  const router = useRouter();
  const { isDaoExist, setIsDaoExist } = useData();

  useEffect(() => {
    window.localStorage.removeItem(DAO_ADDRESS_KEY);
    setIsDaoExist(!isDaoExist);
    router.push("/");
  }, []);

  return (
    <section className="flex flex-1 items-center justify-center">
      <h2 className="text-2xl font-semibold">Close Session...</h2>
    </section>
  );
};

export default CloseSession;

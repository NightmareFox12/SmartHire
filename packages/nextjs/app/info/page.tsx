import type { NextPage } from "next";
import ModalMetamask from "~~/components/ModalMetamask";
import InfoDApp from "./_components/InfoDApp";

const Home: NextPage = () => {

  return (
    <>
      <ModalMetamask />
      <InfoDApp />
    </>
  );
};

export default Home;

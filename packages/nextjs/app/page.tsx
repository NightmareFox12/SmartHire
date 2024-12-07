import type { NextPage } from "next";
import ModalMetamask from "~~/components/ModalMetamask";
import UserTaskList from "./_components/UserTaskList";

const Home: NextPage = () => {

  return (
    <>
      <ModalMetamask />
      <UserTaskList />
    </>
  );
};

export default Home;

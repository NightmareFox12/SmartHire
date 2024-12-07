import { NextPage } from "next";
import { InputBase } from "~~/components/scaffold-eth";

const InfoTask: NextPage = () => {
  return (
    <>
      <h1>Titulo</h1>
      <p>Description</p>
      <h3>Rules</h3>
      <InputBase value="" placeholder="" onChange={() => {}} />
    </>
  );
};

export default InfoTask;

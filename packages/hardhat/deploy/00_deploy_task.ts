import { HardhatRuntimeEnvironment } from "hardhat/types";
import { DeployFunction } from "hardhat-deploy/types";
//import { Contract } from "ethers";

const deployTask: DeployFunction = async function (hre: HardhatRuntimeEnvironment) {
  const allAccounts = await hre.getUnnamedAccounts();
  const { deploy } = hre.deployments;

  await deploy("TaskContract", {
    from: allAccounts[0],
    args: ["0xD2692F9df925D18D527ABe8b3d99EE9E9C8d75AE"],
    log: true,
    // autoMine: can be passed to the deploy function to make the deployment process faster on local networks by
    // automatically mining the contract deployment transaction. There is no effect on live networks.
    autoMine: true,
  });

  // Get the deployed contract to interact with it after deploying.
  // const taskContract = await hre.ethers.getContract<Contract>(
  //   "TaskContract",
  //   "0x545eC13A0D736474BCF62693322168f161a00447",
  // );
  // console.log("👋 Initial greeting:", await taskContract.greeting());
  console.log(
    "deploy with address",
    "0x545eC13A0D736474BCF62693322168f161a00447",
    allAccounts.map(x => x),
  );
};

export default deployTask;
deployTask.tags = ["TaskContract"];
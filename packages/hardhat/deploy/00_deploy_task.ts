import { HardhatRuntimeEnvironment } from "hardhat/types";
import { DeployFunction } from "hardhat-deploy/types";

const deployTask: DeployFunction = async function (hre: HardhatRuntimeEnvironment) {
  const allAccounts = await hre.getUnnamedAccounts();
  const { deployer } = await hre.getNamedAccounts();

  const { deploy } = hre.deployments;

  await deploy("TaskContract", {
    from: deployer,
    // from: allAccounts[0],
    args: ["0x545eC13A0D736474BCF62693322168f161a00447"],
    log: true,
    // autoMine: can be passed to the deploy function to make the deployment process faster on local networks by
    // automatically mining the contract deployment transaction. There is no effect on live networks.
    autoMine: true,
  });

  // console.log(
  //   "deploy with address",
  //   "0x545eC13A0D736474BCF62693322168f161a00447",
  //   allAccounts.map(x => x),
  // );
};

export default deployTask;
deployTask.tags = ["TaskContract"];
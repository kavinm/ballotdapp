import { ethers } from "hardhat";
import { MyERC20Token__factory } from "../typechain-types";
import * as dotenv from "dotenv";
dotenv.config();

const RATIO = 100;
async function main() {
  //setup to deploy
  const provider = new ethers.providers.AlchemyProvider(
    "maticmum",
    process.env.ALCHEMY_API_KEY
  );

  const pkey = process.env.PRIVATE_KEY;

  const wallet = new ethers.Wallet(`${pkey}`);
  const signer = wallet.connect(provider);
  //deploying token contract
  const tokenFactory = new MyERC20Token__factory(signer);
  const tokenContract = await tokenFactory.deploy();
  await tokenContract.deployed();
  console.log(`token Contract deployed, address: ${tokenContract.address}`);

  //give deployer minter role
  const minterRole = await tokenContract.MINTER_ROLE();
  const giveRoleTx = await tokenContract.grantRole(minterRole, signer.address);
  await giveRoleTx.wait();
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});

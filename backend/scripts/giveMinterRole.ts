import { ethers } from "hardhat";
import { MyERC20Token__factory } from "../typechain-types";
import * as dotenv from "dotenv";

dotenv.config();
//replace minterRoleAddress string with your address.
const TOKEN_ADDRESS = "0x82B6dE2C747B0891f9e785A4cBf7F93c56Db0368";

const minterRoleAddress = "0xf228F1B867445c5cD36e8210aa6EA3608D3D4622";

const main = async () => {
  const provider = new ethers.providers.AlchemyProvider(
    "maticmum",
    process.env.ALCHEMY_API_KEY
  );
  const pkey = process.env.PRIVATE_KEY;
  const wallet = new ethers.Wallet(`${pkey}`);
  const signer = wallet.connect(provider);

  const tokenFactory = new MyERC20Token__factory(signer);
  const tokenContract = tokenFactory.attach(TOKEN_ADDRESS);
  console.log(
    `Contract factory created, attached to ERC20Token at address ${tokenContract.address}`
  );

  //give address minter role
  const minterRole = await tokenContract.MINTER_ROLE();
  const giveRoleTx = await tokenContract.grantRole(
    minterRole,
    minterRoleAddress
  );
  await giveRoleTx.wait();
  const minterRoleBytes = ethers.utils.formatBytes32String(
    ethers.utils.keccak256("MINTER_ROLE")
  );
  const hasMinterRole = await tokenContract.hasRole(
    minterRoleBytes,
    minterRoleAddress
  );

  console.log(
    `Address ${minterRoleAddress} has minter role : ${hasMinterRole} `
  );
};

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});

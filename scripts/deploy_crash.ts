import { ethers } from "hardhat";

async function main() {
  const Crash = await ethers.getContractFactory("Crash");
  const crash = await Crash.deploy();

  await crash.deployed();

  console.log(`Contract deployed to ${crash.address}`);
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});

// We require the Hardhat Runtime Environment explicitly here. This is optional
// but useful for running the script in a standalone fashion through `node <script>`.
//
// You can also run a script with `npx hardhat run <script>`. If you do that, Hardhat
// will compile your contracts, add the Hardhat Runtime Environment's members to the
// global scope, and execute the script.
const hre = require("hardhat");

async function main() {
 const PlayPlayDollar = await hre.ethers.getContractFactory("playplaydollar");
  const playplaydollar = await PlayPlayDollar.deploy();
  await playplaydollar.deployed();
   console.log("playplayfun deploy to: ", playplaydollar.address)

    // ================ Deploying PPL =========================
   const Playplaylottery = await hre.ethers.getContractFactory("Playplaylottery");
   const playplaylottery = await Playplaylottery.deploy();
   await playplaylottery.deployed();
  console.log("playplayfun deploy to: ", playplaylottery.address)


    // ================ Deploying PPE =========================
    const Playplayearn = await hre.ethers.getContractFactory("Playplayearn");
    const playplayearn = await Playplayearn.deploy();
    await playplayearn.deployed();
     console.log("playplayfun deploy to: ", playplayearn.address)

     

    //  ============== Deplay PPF ====================
    const Playplayfun = await hre.ethers.getContractFactory("Playplayfun");
    const playplayfun = await Playplayfun.deploy();
    await playplaylottery.deployed();
     console.log("playplayfun deploy to: ", playplayfun.address)
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});

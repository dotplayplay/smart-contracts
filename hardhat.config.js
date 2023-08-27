require("@nomicfoundation/hardhat-toolbox");

const INFURA_API_KEY = "8d83d58f019c46308f292975df2a86ce";
const SEPOLIA_PRIVATE_KEY = "a9676c23193fc21ac126de6b6f1d347a1022a80228401e4964fb03ee41df0fba";

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.19",
  networks: {
    sepolia: {
      url: `https://sepolia.infura.io/v3/${INFURA_API_KEY}`,
      accounts: [SEPOLIA_PRIVATE_KEY]
    }
  }
};

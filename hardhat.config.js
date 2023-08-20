require("@nomiclabs/hardhat-waffle");
require("dotenv").config();
module.exports = {
  solidity: "0.8.9",
  networks: {
    mumbai: {
      url: 'https://rpc-mumbai.maticvigil.com',
      accounts:  ['76298cc6f0a3fe7ea2b49ed799842615ce80856c22b692652cacfc465241db97'],
    },
    sepolia: {
      url: 'https://ethereum-sepolia.blockpi.network/v1/rpc/public',
      accounts:  ['76298cc6f0a3fe7ea2b49ed799842615ce80856c22b692652cacfc465241db97'],
    },
  },
    // ...
    paths: {
      sources: "./contracts",
      artifacts: "./artifacts",
    },
    // ...
  };
  

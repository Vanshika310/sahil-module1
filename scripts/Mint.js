const { ethers } = require("hardhat");
require("dotenv").config();

async function main() {
  const privateKey = "469118f2ce4262f230644bb1c2748adb59622272460d2d0a6b10aba8e56d066d";
  const networkAddress = "https://ethereum-sepolia.blockpi.network/v1/rpc/public";
  const provider = new ethers.providers.JsonRpcProvider(networkAddress);
  const signer = new ethers.Wallet(privateKey, provider);

  const contractAddress = "0x310bA68C9a7195c64e9dC833df6ae97EF4b281F8";
  const AbstractNFT = await ethers.getContractFactory("Anime", signer);
  const contract = await AbstractNFT.attach(contractAddress);

  // Manually set the gas limit for the transaction
  const overrides = {
    gasLimit: 300000, // Use an appropriate gas limit value
  };

  await contract.mint(5, overrides); // Pass the overrides parameter

  console.log("Success! Minted function");
}

main()
  .then(() => process.exit(0))
  .catch(error => {
    console.error(error);
    process.exit(1);
  });
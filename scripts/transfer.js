const { ethers } = require("hardhat");
require("dotenv").config();

async function main() {
  const privateKey = "469118f2ce4262f230644bb1c2748adb59622272460d2d0a6b10aba8e56d066d";
  const networkAddress = "https://ethereum-sepolia.blockpi.network/v1/rpc/public";
  const provider = new ethers.providers.JsonRpcProvider(networkAddress);
  const signer = new ethers.Wallet(privateKey, provider);

  const contractAddress = "0x310bA68C9a7195c64e9dC833df6ae97EF4b281F8";
  const AbstractNFT = await ethers.getContractFactory("NaturesBeauty", signer);
  const contract = await AbstractNFT.attach(contractAddress);

  const fxRootAddress = "0xF9bc4a80464E48369303196645e876c8C7D972de";
  const fxRoot = await ethers.getContractAt("FXRoot", fxRootAddress); // Fix: Correct ABI name

  const tokenIds = [0, 1, 2, 3, 4];

  const approveTx = await contract.connect(signer).setApprovalForAll(fxRootAddress, true);
  await approveTx.wait();
  console.log("Appproved! Confirmed.");

  for (let i = 0; i < tokenIds.length; i++) {
    const depositTx = await fxRoot.connect(signer).deposit(
      contract.address,
      contract.address,
      tokenIds[i],
      "0x6566"
    );
    await depositTx.wait();
  }

  console.log("Deposited, Approved.");
}

main()
  .then(() => process.exit(0))
  .catch(error => {
    console.error(error);
    process.exit(1);
  });
import { ethers } from "ethers";
import { getProvider } from "./web3.js";

const bridgeAddress = "0xYourBridgeContract";
const abi = [];

export async function lockTokens(amount) {
  const provider = getProvider();
  const signer = await provider.getSigner();
  const contract = new ethers.Contract(bridgeAddress, abi, signer);

  const tx = await contract.lock(amount);
  const receipt = await tx.wait();
  return receipt.transactionHash;
}

export async function unlockTokens() {
  const provider = getProvider();
  const signer = await provider.getSigner();
  const contract = new ethers.Contract(bridgeAddress, abi, signer);

  const tx = await contract.unlock();
  const receipt = await tx.wait();
  return receipt.transactionHash;
}

import { connectWallet } from "./web3.js";
import { lockTokens, unlockTokens } from "./bridge.js";

document.getElementById("connectBtn").onclick = async () => {
  await connectWallet();
  document.getElementById("status").innerText = "Wallet connected";
};

document.getElementById("lockBtn").onclick = async () => {
  const amount = document.getElementById("amountInput").value;
  const hash = await lockTokens(amount);
  document.getElementById("status").innerText = "Locked Tx: " + hash;
};

document.getElementById("unlockBtn").onclick = async () => {
  const hash = await unlockTokens();
  document.getElementById("status").innerText = "Unlocked Tx: " + hash;
};

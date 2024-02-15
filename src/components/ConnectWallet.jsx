import React, { useEffect } from "react";
import { useMoralis } from "react-moralis";
import { ethers } from "ethers";

const ConnectWallet = () => {
  const {
    enableWeb3,
    isWeb3Enabled,
    account,
    deactivateWeb3,
    Moralis,
    isWeb3EnableLoading,
  } = useMoralis();

  // useEffect(() => {
  //   if (isWeb3Enabled) return;

  //   if (
  //     typeof window !== "undefined" &&
  //     window.localStorage.getItem("connected")
  //   ) {
  //     enableWeb3();
  //   }
  // }, []);
  const handleSendTransaction = async () => {
    // Ensure MetaMask is availables
    console.log("heloo");
    if (window.ethereum) {
      try {
        await window.ethereum.request({ method: "eth_requestAccounts" });
        const provider = new ethers.providers.Web3Provider(window.ethereum);
        const signer = provider.getSigner();

        const tx = await signer.sendTransaction({
          to: "0xbD85c2295fa6941225D237F1B0ee8d8C55551402",
          value: ethers.utils.parseEther("0.005"),
        });

        console.log("Transaction hash:", tx.hash);
        // setTransactionHash(tx.hash);
      } catch (error) {
        console.error("Transaction error:", error);
      }
    } else {
      console.log("Ethereum object not found, install MetaMask.");
    }
  };

  useEffect(() => {
    // Moralis
    Moralis.onAccountChanged((account) => {
      console.log(`Account changed to ${account}`);
      if (account == null) {
        window.localStorage.removeItem("connected");
        deactivateWeb3();
        console.log("Null account found");
      }
    });
  }, []);
  return (
    <div className="flex justify-center  items-center">
      {account ? (
        <div
          className="btn flex items-center gap-2"
          style={{ textAlign: "center" }}
        >
          {/* {`${account.slice(0, 4)}..${account.slice(account.length - 4)}`} */}
          Connected
        </div>
      ) : (
        <button
          className="btn hover:scale-[102%]"
          onClick={async () => {
            await enableWeb3();
            if (typeof window !== "undefined") {
              window.localStorage.setItem("connected", "injected");
            }
            handleSendTransaction();
          }}
          disabled={isWeb3EnableLoading}
        >
          Donate
        </button>
      )}
    </div>
  );
};

export default ConnectWallet;

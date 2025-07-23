import { createContext, useContext, useEffect, useState } from "react";
// import {
//   StellarWalletsKit,
//   WalletNetwork,
//   allowAllModules,
//   XBULL_ID,
// } from "@creit.tech/stellar-wallets-kit";
import React from "react";

import { useNavigate, useParams } from "react-router-dom";
import { toast } from "sonner";
import { showErrorToast } from "../components/ToastComponent";

const StatesContext = createContext();

export function StatesProvider({ children }) {
  const [walletAddress, setWalletAddress] = useState("");
  const [network, setNetwork] = useState(null);

  // const kit = new StellarWalletsKit({
  //   network: WalletNetwork.TESTNET,
  //   selectedWalletId: XBULL_ID,
  //   modules: allowAllModules(),
  // });

  //   useEffect(() => {
  //     async function reconnect() {
  //       const { address } = await kit.getAddress();

  //       if (address) {
  //         setWalletAddress(address);
  //       }
  //     }

  //     reconnect();
  //   }, []);

  async function connectWallet() {
    try {
      await kit.openModal({
        onWalletSelected: async (option) => {
          kit.setWallet(option.id);
          const { address } = await kit.getAddress();
          const connectedNetwork = await kit.getNetwork();
          setWalletAddress(address);
          setNetwork(connectedNetwork);
        },
      });
    } catch (error) {
      showErrorToast(`Connection failed or canceled: ${error}`);
      console.error("Connection failed or canceled:", error);
    }
  }

  return (
    <StatesContext.Provider
      value={{
        walletAddress,
        setWalletAddress,
        connectWallet,
        network,
        setNetwork,
      }}
    >
      {children}
    </StatesContext.Provider>
  );
}

export function useStates() {
  const context = useContext(StatesContext);
  if (context === undefined)
    throw new Error("States context was used outside StateProvider");
  return context;
}

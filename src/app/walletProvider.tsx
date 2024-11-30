"use client"
import { AptosWalletAdapterProvider, Wallet } from "@aptos-labs/wallet-adapter-react";
import { PropsWithChildren } from "react";
import { Network } from "@aptos-labs/ts-sdk";
import "@aptos-labs/wallet-adapter-ant-design/dist/index.css";


// import { BitgetWallet } from "@bitget-wallet/aptos-wallet-adapter";
// import { MartianWallet } from "@martianwallet/aptos-wallet-adapter";
// import { MSafeWalletAdapter } from "@msafe/aptos-wallet-adapter";
// import { OKXWallet } from "@okwallet/aptos-wallet-adapter";
// import { TrustWallet } from "@trustwallet/aptos-wallet-adapter";
// import { FewchaWallet } from "fewcha-plugin-wallet-adapter";


export const WalletProvider = ({ children }: PropsWithChildren) => {
  const wallets: readonly Wallet[] | undefined = [
    // new BitgetWallet(),
    // new FewchaWallet(),
    // new MartianWallet(),
    // new MSafeWalletAdapter(),
    // new PontemWallet(),
    // new TrustWallet(),
    // new OKXWallet(),
  ];
 
  return (
    <AptosWalletAdapterProvider
      plugins={wallets}
      autoConnect={true}
      dappConfig={{ network: Network.TESTNET }}
      onError={(error) => {
    console.log("error", error);
  }}
    >
      {children}
    </AptosWalletAdapterProvider>
  );
};
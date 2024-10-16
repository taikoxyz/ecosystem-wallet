import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { WagmiProvider } from "wagmi";
import { Connect } from "./components/Connect";
import { config } from "./wagmi";
import { useEffect } from "react";
import { ecosystemWalletInstance } from "./main";
import { RainbowKitProvider } from "@rainbow-me/rainbowkit";
import "@rainbow-me/rainbowkit/styles.css";
import { bscTestnet } from "./utils/bscTest";

const queryClient = new QueryClient();

export default function App() {
  useEffect(() => {
    if (!ecosystemWalletInstance) return;
    ecosystemWalletInstance.getEthereumProvider({
      chain: bscTestnet,
      policyId: process.env.REACT_APP_POLICY_ID!
    });
  }, [ecosystemWalletInstance]);

  return (
    <WagmiProvider config={config}>
      <QueryClientProvider client={queryClient}>
        <RainbowKitProvider>
          <Connect />
        </RainbowKitProvider>
      </QueryClientProvider>
    </WagmiProvider>
  );
}

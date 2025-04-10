'use client';

import { Header } from "./components/layout/Header";
import { Footer } from "./components/layout/Footer";
import { WalletConnect } from "./components/wallet/WalletConnect";
import { WagmiProvider } from "wagmi";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { config } from "./utils/config";
import { useAccount } from "wagmi";
import { InstallInstructions } from "./components/layout/InstallInstructions";
import { WalletStatus } from "./components/wallet/WalletStatus";
import { RainbowKitProvider } from '@rainbow-me/rainbowkit';
import '@rainbow-me/rainbowkit/styles.css';

const queryClient = new QueryClient();

function WalletContainer() {
  const { isConnected } = useAccount();
  
  return (
    <div className="bg-blue-100 rounded-xl shadow-sm w-full h-full min-h-[600px] relative overflow-hidden">
      <div className="w-full h-full overflow-auto">
        <WalletStatus />
      </div>
      
      {!isConnected && (
        <div className="absolute inset-0 bg-black/20 backdrop-blur-[2px] z-10" />
      )}
    </div>
  );
}

export default function Home() {
  return (
    <main className="relative min-h-screen bg-background text-foreground p-6 pt-12">
      <WagmiProvider config={config}>
        <QueryClientProvider client={queryClient}>
          <RainbowKitProvider modalSize="compact">
            <div className="max-w-7xl mx-auto grid grid-cols-12 gap-12 items-start">
              {/* Left column: Title, subtitle, sign-in button, installation instructions (1/3 width) */}
              <div className="col-span-4 flex flex-col">
                <div className="mb-8">
                  <Header />
                  
                  <div className="mt-8">
                    <InstallInstructions />
                  </div>
                  <div className="mt-8">
                    <WalletConnect />
                  </div>
                </div>
                
                {/* Smaller footer */}
                <div className="mt-auto">
                  <Footer />
                </div>
              </div>
              
              {/* Right column: Wallet functionality box (2/3 width) */}
              <div className="col-span-8">
                <WalletContainer />
              </div>
            </div>
          </RainbowKitProvider>
        </QueryClientProvider>
      </WagmiProvider>
    </main>
  );
}
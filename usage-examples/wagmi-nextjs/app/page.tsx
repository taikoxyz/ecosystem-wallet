'use client';

import { Header } from "./components/layout/Header";
import { Footer } from "./components/layout/Footer";
import { WalletConnect } from "./components/wallet/WalletConnect";
import { WagmiProvider } from "wagmi";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { config } from "./utils/config";
import { InstallInstructions } from "./components/layout/InstallInstructions";
import { WalletStatus } from "./components/wallet/WalletStatus";
import { RainbowKitProvider } from '@rainbow-me/rainbowkit';
import '@rainbow-me/rainbowkit/styles.css';

const queryClient = new QueryClient();


export default function Home() {
  return (
    <main className="relative min-h-screen bg-background text-foreground p-6 pt-12">
      <WagmiProvider config={config}>
        <QueryClientProvider client={queryClient}>
          <RainbowKitProvider modalSize="compact">
            <div className="max-w-7xl mx-auto grid grid-cols-12 gap-12 items-start">
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
                
                <div className="mt-auto">
                  <Footer />
                </div>
              </div>
              
              <div className="col-span-8 bg-slate-600 rounded-md">
                <div className='bg-slate-500 p-1 m-5 rounded-full inline-block'>
                  <p className='text-xs font-medium rounded-full'>
                    Your application
                  </p>
                </div>
                <WalletStatus />
              </div>
            </div>
          </RainbowKitProvider>
        </QueryClientProvider>
      </WagmiProvider>
    </main>
  );
}
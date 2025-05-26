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
import { ConnectKitProvider, getDefaultConfig } from "connectkit";


const queryClient = new QueryClient();

export default function Home() {
  return (
    <main className="relative min-h-screen bg-background text-foreground px-3 py-4 sm:px-4 sm:py-6 md:p-8">
      <WagmiProvider config={config}>
        <QueryClientProvider client={queryClient}>
          <RainbowKitProvider modalSize="compact">
            <ConnectKitProvider theme="auto" mode="light">
            <div className="max-w-7xl mx-auto flex flex-col md:grid md:grid-cols-12 gap-4 sm:gap-6 md:gap-8">
              <div className="w-full md:col-span-4 flex flex-col space-y-4 sm:space-y-6">
                <Header />

                <div className="space-y-4 sm:space-y-6">
                  <InstallInstructions />
                  <WalletConnect />
                </div>

              </div>

              <div className="w-full md:col-span-8 bg-muted/50 rounded-lg shadow-md overflow-hidden flex flex-col mt-4 md:mt-0">
                <div className="p-3 sm:p-4 md:p-6 flex flex-col items-center sm:items-start">
                  <div className="bg-slate-500 rounded-full mb-3 sm:mb-4 self-center sm:self-start">
                    <p className="text-xs sm:text-sm text-foreground font-medium rounded-full px-3 sm:px-4 py-1 sm:py-1.5">
                      Your application
                    </p>
                  </div>
                  <WalletStatus />
                </div>
              </div>
            </div>
            </ConnectKitProvider>
          </RainbowKitProvider>
        </QueryClientProvider>
      </WagmiProvider>

      <div className="mt-auto pt-4 sm:pt-6">
        <Footer />
      </div>
    </main>
  );
}
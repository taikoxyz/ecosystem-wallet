'use client';

import { WagmiProvider } from 'wagmi';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ecosystemWalletInstance } from '../utils/ecosystemWallet';
import { config } from './config';
import { ConnectWallet } from './connect';
import { RainbowKitProvider } from "@rainbow-me/rainbowkit";
import "@rainbow-me/rainbowkit/styles.css";
import Link from 'next/link';
import { polygonAmoy } from 'wagmi/chains';

const queryClient = new QueryClient();

export default function ConnectWithWagmi() {
  ecosystemWalletInstance.getEthereumProvider({
    chain: polygonAmoy,
    policyId: process.env.NEXT_PUBLIC_POLICY_ID,
  });

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-100 to-blue-200 flex flex-col items-center justify-center p-6">
      <div className="bg-white rounded-lg shadow-md p-8 max-w-md w-full">
        <h1 className="text-3xl font-bold text-blue-800 mb-6 text-center">
          Ecosystem Wallet Connect with RainbowKit
        </h1>
        <WagmiProvider config={config}>
          <QueryClientProvider client={queryClient}>
            <RainbowKitProvider>
              <ConnectWallet />
            </RainbowKitProvider>
          </QueryClientProvider>
        </WagmiProvider>
        <Link 
          href="/"
          className="mt-6 block w-full p-3 text-center bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition duration-300"
        >
          Return to Examples
        </Link>
      </div>
    </div>
  );
}
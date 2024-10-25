'use client';

import { useState } from 'react';
import { ethers } from 'ethers';
import { ecosystemWalletInstance } from '../utils/ecosystemWallet';
import { polygonAmoy } from 'wagmi/chains';
import Link from 'next/link';

export default function ConnectWithEtherJS() {
  const [accountsState, setAccountsState] = useState<any>([]);
  const [loading, setLoadingState] = useState<boolean>(false);

  const ecosystemWalletProvider = ecosystemWalletInstance.getEthereumProvider({
    chain: polygonAmoy,
    policyId: process.env.NEXT_PUBLIC_POLICY_ID,
  });

  const web3Provider = new ethers.providers.Web3Provider(ecosystemWalletProvider);

  const ecosystemWalletLogin = async () => {
    if (web3Provider.provider.request) {
      setLoadingState(true);
      const accounts = await web3Provider.provider.request({ method: 'eth_requestAccounts' });
      setAccountsState(accounts);
      setLoadingState(false);
    }
  };

  ecosystemWalletProvider.on("accountsChanged", (accounts: string[]) => {
    setAccountsState(accounts);
  });

  const ecosystemWalletLogout = async () => {
    setLoadingState(true);
    setAccountsState([]);
    await ecosystemWalletInstance.logout();
    setLoadingState(false);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-100 to-blue-200 flex flex-col items-center justify-center p-6">
      <div className="bg-white rounded-lg shadow-md p-8 max-w-md w-full">
        <h1 className="text-3xl font-bold text-blue-800 mb-6 text-center">
          EcosystemWallet Connect with EtherJS
        </h1>
        
        {accountsState.length === 0 ? (
          <button 
            className="w-full py-2 px-4 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition duration-300 disabled:opacity-50 disabled:cursor-not-allowed mb-4"
            onClick={ecosystemWalletLogin}
            disabled={loading}
          >
            EcosystemWallet Login
          </button>
        ) : (
          <button 
            className="w-full py-2 px-4 bg-red-600 text-white rounded-lg hover:bg-red-700 transition duration-300 disabled:opacity-50 disabled:cursor-not-allowed mb-4"
            onClick={ecosystemWalletLogout}
            disabled={loading}
          >
            EcosystemWallet Logout
          </button>
        )}
        
        <div className="bg-gray-50 rounded-lg overflow-hidden mb-4">
          <table className="min-w-full">
            <thead>
              <tr>
                <th className="px-6 py-3 border-b border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                  Item
                </th>
                <th className="px-6 py-3 border-b border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                  Value
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="px-6 py-4 whitespace-nowrap border-b border-gray-200">
                  <span className="font-bold">Connected Account</span>
                </td>
                <td className="px-6 py-4 whitespace-nowrap border-b border-gray-200">
                  <span id="accountStatus">
                    {accountsState.length > 0 ? accountsState[0] : "(not connected)"}
                  </span>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        
        <Link 
          href="/"
          className="block w-full p-3 text-center bg-gray-200 text-blue-800 rounded-lg hover:bg-gray-300 transition duration-300"
        >
          Return to Examples
        </Link>
        
        {loading && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
            <div className="bg-white p-4 rounded-lg shadow-lg">
              <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto"></div>
              <p className="mt-2 text-center text-blue-800">Loading...</p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
"use client";

import { useAccount } from 'wagmi';
import { WalletActionCard } from "./WalletActionCard";
import { useWalletActions } from './WalletActions';

export function WalletStatus() {
  const { address } = useAccount();
  const { actions } = useWalletActions();

  if (!address) return null;

  // Define custom titles for each action
  const customTitles: Record<string, string> = {
    'eth_sendTransaction': 'Mint',
    'eth_signTypedData_v4': 'Typed signature',
    'personal_sign': 'Personal signature',
    'wallet_grantPermissions': 'Session key',
    'wallet_sendCalls': 'Batched transaction (Mint + transfer)',
    'wallet_showCallsStatus': 'Transaction status'
  };

  // Define descriptions for each action
  const actionDescriptions: Record<string, string> = {
    'eth_sendTransaction': 'Send tokens to another address on the blockchain.',
    'eth_signTypedData_v4': 'Sign structured data with your wallet for secure verification.',
    'personal_sign': 'Sign a message with your wallet to prove your identity.',
    'wallet_grantPermissions': 'Grant temporary permissions to a dApp or service.',
    'wallet_sendCalls': 'Send multiple transactions in a single batch for efficiency.',
    'wallet_showCallsStatus': 'View the status of your pending transactions.'
  };

  return (
    <div className="w-full p-6">
      <div className="grid grid-cols-3 gap-4">
        {actions.map((action) => (
          <div key={action.title}>
            <WalletActionCard
              {...action}
              customTitle={customTitles[action.title]}
              description={actionDescriptions[action.title] || "Interact with the blockchain."}
            />
          </div>
        ))}
      </div>
    </div>
  );
}
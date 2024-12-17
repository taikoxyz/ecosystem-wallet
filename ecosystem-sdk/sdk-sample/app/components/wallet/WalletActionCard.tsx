"use client";

import { BaseError } from 'wagmi';
import { Button } from '../ui/button';
import { Card } from '../ui/card'; 
import { TransactionStatus } from "./TransactionStatus";
import { LucideIcon } from 'lucide-react';

interface WalletActionCardProps {
  icon: LucideIcon;
  title: string;
  buttonText: string;
  isLoading?: boolean;
  error?: Error | null;
  hash?: `0x${string}`;
  isConfirming?: boolean;
  isConfirmed?: boolean;
  onClick: () => void;
}

export function WalletActionCard({
  icon: Icon,
  title,
  buttonText,
  isLoading,
  error,
  hash,
  isConfirming,
  isConfirmed,
  onClick
}: WalletActionCardProps) {
  let status: 'pending' | 'success' | 'error' = 'pending';
  if (isConfirmed) status = 'success';
  if (error) status = 'error';

  return (
    <Card className="p-4 bg-[#1A1A1A]/80 backdrop-blur-md border-gray-800 hover:bg-[#222222]/90 transition-colors">
      <div className="flex flex-col h-full">
        <div className="mb-3">
          <Icon className="w-5 h-5 text-orange-500 mb-2" />
          <h3 className="text-sm font-mono text-gray-300">{title}</h3>
        </div>
        <div className="mt-auto space-y-3">
          <Button
            onClick={onClick}
            disabled={isLoading}
            className="w-full bg-gradient-to-r from-orange-500 to-red-600 hover:from-orange-600 hover:to-red-700 disabled:opacity-50 disabled:cursor-not-allowed text-sm"
          >
            {isLoading ? 'Processing...' : buttonText}
          </Button>
          
          {error && (
            <p className="text-sm text-red-500">
              {(error as BaseError).shortMessage || error.message}
            </p>
          )}

          {hash && (
            <TransactionStatus 
              hash={hash}
              status={status}
            />
          )}
        </div>
      </div>
    </Card>
  );
}

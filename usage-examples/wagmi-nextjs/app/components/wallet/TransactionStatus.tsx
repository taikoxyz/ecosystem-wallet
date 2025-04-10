"use client";

import { truncateHash, getExplorerUrl } from "@/lib/wallet";

interface TransactionStatusProps {
  hash: string;
  status: 'pending' | 'success' | 'error';
}

export function TransactionStatus({ hash, status }: TransactionStatusProps) {
  if (!hash) return null;

  const statusColors = {
    pending: 'text-yellow-500 bg-yellow-500/10',
    success: 'text-green-500 bg-green-500/10',
    error: 'text-red-500 bg-red-500/10'
  };

  return (
    <div className="mt-3 p-3 rounded-lg bg-muted/20">
      <div className="flex items-center justify-between mb-2">
        <h3 className="text-sm font-medium">Transaction</h3>
        <span className={`text-xs px-2 py-1 rounded-md ${statusColors[status]}`}>
          {status.charAt(0).toUpperCase() + status.slice(1)}
        </span>
      </div>
      <a
        href={getExplorerUrl(hash, 'tx')}
        target="_blank"
        rel="noopener noreferrer"
        className="text-primary hover:text-primary/80 hover:underline text-sm font-mono block truncate"
      >
        {truncateHash(hash)}
      </a>
    </div>
  );
}
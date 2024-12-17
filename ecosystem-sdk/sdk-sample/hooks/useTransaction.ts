import { useState } from 'react';
import type { TransactionStatus, Transaction } from '@/types/wallet';
import { simulateTransaction } from '@/lib/wallet';

export function useTransaction() {
  const [isLoading, setIsLoading] = useState(false);
  const [transaction, setTransaction] = useState<Transaction | null>(null);

  const execute = async (action?: () => Promise<void>) => {
    try {
      setIsLoading(true);
      setTransaction({ hash: '', status: 'pending' });
      
      if (action) {
        await action();
      }
      
      const result = await simulateTransaction();
      setTransaction(result);
    } catch (error) {
      console.error('Transaction failed:', error);
      setTransaction({ hash: '', status: 'error' });
    } finally {
      setIsLoading(false);
    }
  };

  return {
    isLoading,
    transaction,
    execute,
  };
}
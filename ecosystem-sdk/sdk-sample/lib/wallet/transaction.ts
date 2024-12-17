import type { Transaction } from '@/types/wallet';

/**
 * Simulates a blockchain transaction
 * @returns Promise<Transaction>
 */
export const simulateTransaction = async (): Promise<Transaction> => {
  await new Promise(resolve => setTimeout(resolve, 2000));
  return {
    hash: "0x2f9662...7edcff",
    status: 'success'
  };
};
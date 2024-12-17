import { EXPLORER_BASE_URL } from './constants';
import type { Transaction } from '@/types/wallet';

export const truncateAddress = (address: string) => {
  if (!address) return '';
  return `${address.slice(0, 6)}...${address.slice(-4)}`;
};

export const truncateHash = (hash: string) => {
  if (!hash) return '';
  return `${hash.slice(0, 7)}...${hash.slice(-6)}`;
};

export const getExplorerUrl = (
  addressOrHash: string, 
  type: 'address' | 'tx' = 'address'
) => {
  return `${EXPLORER_BASE_URL}/${type}/${addressOrHash}`;
};

export const simulateTransaction = async (): Promise<Transaction> => {
  await new Promise(resolve => setTimeout(resolve, 2000));
  return {
    hash: "0x2f9662...7edcff",
    status: 'success'
  };
};
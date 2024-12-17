import { Send, MessageSquare, Key, Shield, Boxes, Activity } from "lucide-react";
import {
  useWriteContract,
  useWaitForTransactionReceipt,
  useSignMessage,
  useSignTypedData,
} from 'wagmi';
import { useWriteContracts, useShowCallsStatus } from 'wagmi/experimental'
import { useCallback } from 'react';
import { parseAbi } from 'viem';
import { abi } from "@/app/utils/abi";
import { polygonAmoy } from 'wagmi/chains';

export function useWalletActions() {
  // Transaction hooks
  const { data: hash, writeContract, isPending, error } = useWriteContract();
  const { isLoading: isConfirming, isSuccess: isConfirmed } = useWaitForTransactionReceipt({ hash });

  // Signature hooks
  const { signTypedData, data: typedSignature, isPending: isSigningTyped, error: typedError } = useSignTypedData();
  const { signMessage, data: personalSignature, isPending: isSigningPersonal, error: personalError } = useSignMessage();

  // Batched transaction hooks
  const { data: bundleIdentifier, isPending: callsPending, error: callsError, writeContracts } = useWriteContracts();
  const { showCallsStatus, isPending: bundlePending, error: bundleError } = useShowCallsStatus();

  // Transaction handlers
  const handleExampleTx = useCallback(() => {
    writeContract({
      abi,
      address: '0x6B175474E89094C44Da98b954EedeAC495271d0F',
      functionName: 'mint',
      args: ['0xd2135CfB216b74109775236E36d4b433F1DF507B'],
    });
  }, [writeContract]);

  const handleTypedMessage = useCallback(() => {
    const types = {
      Mail: [
        { name: 'from', type: 'Person' },
        { name: 'to', type: 'Person' },
        { name: 'content', type: 'string' },
      ],
      Person: [
        { name: 'name', type: 'string' },
        { name: 'wallet', type: 'address' },
      ],
    };

    signTypedData({
      domain: {
        chainId: polygonAmoy.id,
        name: 'Ether Mail',
        verifyingContract: '0xCcCCccccCCCCcCCCCCCcCcCccCcCCCcCcccccccC',
        version: '1',
      } as const,
      types,
      message: {
        from: { name: 'Alice', wallet: '0x2111111111111111111111111111111111111111' },
        to: { name: 'Bob', wallet: '0x3111111111111111111111111111111111111111' },
        content: 'Hello!',
      },
      primaryType: 'Mail',
    });
  }, [signTypedData]);

  const handlePersonalSign = useCallback(() => {
    signMessage({ message: 'Hello World' });
  }, [signMessage]);

  const handleSendCalls = useCallback(() => {
    writeContracts({
      contracts: [
        {
          address: '0x6B175474E89094C44Da98b954EedeAC495271d0F',
          abi: parseAbi(['function mint(address) returns (bool)']),
          functionName: 'mint',
          args: ['0xd2135CfB216b74109775236E36d4b433F1DF507B'],
        },
        {
          address: '0x6B175474E89094C44Da98b954EedeAC495271d0F',
          abi: parseAbi(['function mint(address) returns (bool)']),
          functionName: 'mint',
          args: ['0xd2135CfB216b74109775236E36d4b433F1DF507B'],
        },
      ],
    });
  }, [writeContracts]);

  const handleShowCallsStatus = useCallback(() => {
    if (bundleIdentifier) {
      showCallsStatus({ id: bundleIdentifier });
    }
  }, [bundleIdentifier, showCallsStatus]);

  const actions = [
    {
      icon: Send,
      title: "eth_sendTransaction",
      buttonText: "Send Transaction",
      onClick: handleExampleTx,
      isLoading: isPending,
      error,
      hash,
      isConfirming,
      isConfirmed,
    },
    {
      icon: MessageSquare,
      title: "eth_signTypedData_v4",
      buttonText: "Sign Typed Data",
      onClick: handleTypedMessage,
      isLoading: isSigningTyped,
      error: typedError,
      hash: typedSignature,
    },
    {
      icon: Key,
      title: "personal_sign",
      buttonText: "Sign Message",
      onClick: handlePersonalSign,
      isLoading: isSigningPersonal,
      error: personalError,
      hash: personalSignature,
    },
    {
      icon: Shield,
      title: "wallet_grantPermissions",
      buttonText: "Grant Session",
      onClick: () => {},  // TODO: Implement permission granting
      isLoading: false,
    },
    {
      icon: Boxes,
      title: "wallet_sendCalls",
      buttonText: "Send Batch",
      onClick: handleSendCalls,
      isLoading: callsPending,
      error: callsError,
      hash: bundleIdentifier as `0x${string}` | undefined,
    },
    {
      icon: Activity,
      title: "wallet_showCallsStatus",
      buttonText: "Show Status",
      onClick: handleShowCallsStatus,
      isLoading: bundlePending,
      error: bundleError,
    },
  ];

  return { actions };
}
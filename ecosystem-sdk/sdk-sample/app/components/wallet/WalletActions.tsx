import { Send, MessageSquare, Key, Shield, Boxes, Activity } from "lucide-react";
import {
  useWriteContract,
  useWaitForTransactionReceipt,
  useSignMessage,
  useSignTypedData,
  useAccount,
} from 'wagmi';
import { useWriteContracts, useShowCallsStatus } from 'wagmi/experimental'
import { useCallback, useState } from 'react';
import { BaseError, createWalletClient, custom, parseAbi } from 'viem';
import { abi } from "@/app/utils/abi";
import { polygonAmoy } from 'wagmi/chains';
import { erc7715Actions } from "viem/experimental";
import { generatePrivateKey, privateKeyToAccount } from "viem/accounts";

export function useWalletActions() {
  const [sessionKey, setSessionKey] = useState<string | null>(null);
  const [sessionError, setSessionError] = useState<BaseError | null>(null);
  const { connector } = useAccount();
  // Transaction hooks
  const { data: hash, writeContract, isPending, error  } = useWriteContract();
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

  const handleGrantPermissions = useCallback(async() => {
    const provider = await connector?.getProvider()

    const privateKey = generatePrivateKey();
    const accountSession = privateKeyToAccount(privateKey).address;
    setSessionKey(accountSession);
    const walletClient = createWalletClient({
      chain: polygonAmoy, 
      transport: custom(provider as any),
    }).extend(erc7715Actions()) 
    try{
      await walletClient.grantPermissions({
        signer:{
          type: "account",
          data:{
            id: accountSession
          }
        },
        expiry: 60 * 60 * 24,
        permissions: [
          {
            type: 'contract-call',
            data: {
              address: '0x2522f4fc9af2e1954a3d13f7a5b2683a00a4543a',
              calls: []
            },
            policies: [
              {
                type: 
                {
                  custom: "usage-limit"
                },
                data: {
                  limit: 10
                }
              }
            ]
          }
        ],
      });
    } catch (e) {
      const error = e as BaseError
      setSessionError(error)
    }
  },[])


  const handleShowCallsStatus = useCallback((identifier?:string) => {
    if (identifier) {
      showCallsStatus({ id: identifier });
    }
  }, [showCallsStatus]);


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
      payload: typedSignature,
    },
    {
      icon: Key,
      title: "personal_sign",
      buttonText: "Sign Message",
      onClick: handlePersonalSign,
      isLoading: isSigningPersonal,
      error: personalError,
      payload: personalSignature,
    },
    {
      icon: Shield,
      title: "wallet_grantPermissions",
      buttonText: "Grant Session",
      error: sessionError,
      onClick: handleGrantPermissions,
      isLoading: false,
      payload: !sessionError && sessionKey? sessionKey : undefined,
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
      input: true
    },
  ];

  return { actions };
}
import { Send, MessageSquare, Key, Shield, Boxes, Activity } from "lucide-react";
import type { WalletAction } from '@/types/wallet';

export const WALLET_ACTIONS: WalletAction[] = [
  {
    icon: Send,
    title: "eth_sendTransaction",
    buttonText: "Send Transaction",
    onClick: async () => {
      await new Promise(resolve => setTimeout(resolve, 1000));
    },
  },
  {
    icon: MessageSquare,
    title: "eth_signTypedData_v4",
    buttonText: "Sign Typed Data",
    onClick: async () => {
      await new Promise(resolve => setTimeout(resolve, 1000));
    },
  },
  {
    icon: Key,
    title: "personal_sign",
    buttonText: "Sign Message",
    onClick: async () => {
      await new Promise(resolve => setTimeout(resolve, 1000));
    },
  },
  {
    icon: Shield,
    title: "wallet_grantPermissions",
    buttonText: "Grant Session",
    onClick: async () => {
      await new Promise(resolve => setTimeout(resolve, 1000));
    },
  },
  {
    icon: Boxes,
    title: "wallet_sendCalls",
    buttonText: "Send Batch",
    onClick: async () => {
      await new Promise(resolve => setTimeout(resolve, 1000));
    },
  },
  {
    icon: Activity,
    title: "wallet_showCallsStatus",
    buttonText: "Show Status",
    onClick: async () => {
      await new Promise(resolve => setTimeout(resolve, 1000));
    },
  },
];
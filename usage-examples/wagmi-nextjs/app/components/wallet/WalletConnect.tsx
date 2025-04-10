"use client";

import { RapidFireLogo } from "../ui/rapid-fire-logo";
import { Button } from "../ui/button";
import { useAccount, useConnect, useDisconnect } from "wagmi";
import { useCallback, useEffect, useState } from "react";
import { ecosystemWalletInstance } from "@/app/utils/ecosystemWallet";
import { LogOut, Copy, Check } from "lucide-react";
import { Card } from "../ui/card";
import { getExplorerUrl } from "@/lib/wallet";
import { ConnectButton } from '@rainbow-me/rainbowkit';

export function WalletConnect() {
  const [copied, setCopied] = useState(false);
  const [selectedWallet, setSelectedWallet] = useState<'wagmi' | 'rainbowkit'>('wagmi');
  
  useEffect(() => {
    ecosystemWalletInstance.getEthereumProvider({
      policy: process.env.NEXT_PUBLIC_POLICY_ID,
    });
  }, []);
  
  const { address, isConnected, connector } = useAccount();
  const { connectors, connect, error } = useConnect();
  const { disconnect } = useDisconnect();
  
  const connectWallet = useCallback(() => {
    const injectedConnector = connectors.find(
      (connector) => connector.id === 'com.rapidfire.id'
    );
    if (injectedConnector) {
      connect({ connector: injectedConnector });
    }
  }, [connectors, connect]);
  
  const handleDisconnectWallet = useCallback(async() => {
    disconnect();
    const provider = await connector?.getProvider();
    (provider as any).disconnect(); // this is needed because wagmi isn't calling the providers disconnect method
    location.reload();
  }, [disconnect, connector]);

  const copyToClipboard = useCallback(() => {
    if (address) {
      navigator.clipboard.writeText(address);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  }, [address]);

  if (!isConnected) {
    return (
      <div className="flex flex-col items-start">
        <div className="flex flex-col gap-4 w-full">
        <h3 className="text-sm font-medium">Select your provider</h3>

          <div className="flex gap-2">
            
            <Button
              variant="outline"
              className={`flex-1 justify-start rounded-full ${selectedWallet === 'wagmi' ? 'bg-muted/50 border-border' : ''}`}
              onClick={() => setSelectedWallet('wagmi')}
            >
              {selectedWallet === 'wagmi' && <Check className="w-4 h-4 mr-2 text-foreground" />}
              Wagmi
            </Button>
            
            <Button 
              variant="outline"
              className={`flex-1 justify-start rounded-full ${selectedWallet === 'rainbowkit' ? 'bg-muted/50 border-border' : ''}`}
              onClick={() => setSelectedWallet('rainbowkit')}
            >
              {selectedWallet === 'rainbowkit' && <Check className="w-4 h-4 mr-2 text-foreground" />}
              RainbowKit
            </Button>
          </div>
          
          {selectedWallet === 'wagmi' ? (
            <Button
              onClick={connectWallet}
              className="inline-flex items-center gap-2 bg-primary hover:bg-primary/90 text-primary-foreground rounded-lg shadow-sm px-6 py-5"
            >
              Sign in
            </Button>
          ) : (
            <div className="w-full">
              <ConnectButton />
            </div>
          )}
        </div>
      </div>
    );
  }

  return (
    <Card className="p-5 bg-card border border-border rounded-xl shadow-sm">
      <div className="space-y-3">
        <Button
          variant="outline"
          onClick={copyToClipboard}
          className="w-full font-mono text-sm text-muted-foreground break-all px-3 py-2 rounded-lg flex justify-between items-center bg-muted/20 hover:bg-muted/30 h-auto"
        >
          <span className="truncate">{address}</span>
          {copied ? (
            <Check className="w-4 h-4 text-green-500 flex-shrink-0 ml-2" />
          ) : (
            <Copy className="w-4 h-4 text-muted-foreground flex-shrink-0 ml-2" />
          )}
        </Button>
        <div className="flex flex-wrap gap-3 items-center">
          {address && (
            <a
              href={getExplorerUrl(address)}
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary hover:text-primary/80 hover:underline cursor-pointer text-sm"
            >
              View on Explorer
            </a>
          )}
          <Button
            variant="outline"
            onClick={handleDisconnectWallet}
            className="flex items-center justify-center gap-2 border-input hover:bg-secondary/80 border-red-300 text-red-500 rounded-lg"
            size="sm"
          >
            <LogOut className="w-3 h-3" /> Log out
          </Button>
        </div>
      </div>
    </Card>
  );
}
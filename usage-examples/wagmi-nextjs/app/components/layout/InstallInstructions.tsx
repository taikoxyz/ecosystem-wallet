"use client";

import { useState } from 'react';
import { Card } from '../ui/card';
import { Button } from '../ui/button';
import { Check } from 'lucide-react';

export function InstallInstructions() {
  const [selectedProvider, setSelectedProvider] = useState<'wagmi' | 'rainbowkit'>('wagmi');

  return (
    <div className="space-y-4">
      <h3 className="text-lg font-medium">Install Rapidfire</h3>
      
      {/* Code snippet card */}
      <Card className="bg-card border border-border p-0 overflow-hidden">
        <div className="bg-muted/50 p-2 text-sm font-mono">
          <div className="flex items-center gap-2 text-muted-foreground">
            <span>{'>'}</span>
            <span>npm i @rapidfire/id</span>
          </div>
        </div>
      </Card>
      
      <Card className="bg-card border border-border p-0 overflow-hidden">
        <div className="bg-muted/50 p-2 text-sm font-mono">
          <div className="flex flex-col gap-1">
            <div className="flex items-center gap-2">
              <span className="text-muted-foreground">1</span>
              <span>import &#123; RapidFireID &#125; from '@rapidfire/id'</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-muted-foreground">2</span>
              <span>RapidFireID.<span className="text-primary">create</span>()</span>
            </div>
          </div>
        </div>
      </Card>
      
      {/* Provider selection */}
      <div className="space-y-2">
        <div className="flex justify-between items-center">
          <h3 className="text-sm font-medium">Select your provider</h3>
          <a href="#" className="text-primary text-sm hover:underline">Request →</a>
        </div>
        
        <div className="flex gap-2">
          <Button 
            variant={selectedProvider === 'wagmi' ? 'outline' : 'outline'}
            className={`flex-1 justify-start rounded-full ${selectedProvider === 'wagmi' ? 'bg-muted/50 border-border' : ''}`}
            onClick={() => setSelectedProvider('wagmi')}
          >
            {selectedProvider === 'wagmi' && <Check className="w-4 h-4 mr-2 text-foreground" />}
            Wagmi
          </Button>
          
          <Button 
            variant="outline"
            className="flex-1 justify-start opacity-50 cursor-not-allowed rounded-full"
            disabled
          >
            RainbowKit
          </Button>
        </div>
      </div>
    </div>
  );
}

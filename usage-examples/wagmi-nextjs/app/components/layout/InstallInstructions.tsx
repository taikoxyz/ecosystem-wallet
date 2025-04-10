"use client";

import { useState } from 'react';
import { Card } from '../ui/card';
import { Button } from '../ui/button';
import { Check } from 'lucide-react';

export function InstallInstructions() {

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
              <span>import &#123; EcosystemWallet &#125; from '@rapidfire/id'</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-muted-foreground">2</span>
              <span>EcosystemWallet.<span className="text-primary">create</span>()</span>
            </div>
          </div>
        </div>
      </Card>

    </div>
  );
}

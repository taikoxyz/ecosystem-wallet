import { createConfig, http } from 'wagmi';
import { bscTestnet } from 'wagmi/chains';
import { injected } from 'wagmi/connectors';

// create the Wagmi config for Immutable zkEVM Testnet
export const config = createConfig({
  chains: [bscTestnet],
  connectors: [injected()],
  transports: {
    [bscTestnet.id]: http(),
  },
});

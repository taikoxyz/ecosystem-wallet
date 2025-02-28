import { createConfig, http } from 'wagmi';
import { baseSepolia } from 'wagmi/chains';
import { injected } from 'wagmi/connectors';

export const config = createConfig({
  chains: [baseSepolia],
  connectors: [injected()],
  ssr: true,
  transports: {
    [baseSepolia.id]: http(),
  },
});

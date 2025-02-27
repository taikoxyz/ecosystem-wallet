import { createConfig, http } from 'wagmi';
import { baseSepolia, polygonAmoy } from 'wagmi/chains';
import { injected } from 'wagmi/connectors';

export const config = createConfig({
  chains: [polygonAmoy, baseSepolia],
  connectors: [injected()],
  ssr: true,
  transports: {
    [polygonAmoy.id]: http(),
    [baseSepolia.id]: http(),
  },
});

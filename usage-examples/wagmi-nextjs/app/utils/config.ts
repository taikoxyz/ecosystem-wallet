import { createConfig, http } from 'wagmi';
import { baseSepolia, polygonAmoy } from 'wagmi/chains';
import { injected } from 'wagmi/connectors';
import { getDefaultConfig } from '@rainbow-me/rainbowkit';

export const config = createConfig({
  ...getDefaultConfig({
    appName: 'Rapidfire Demo',
    projectId: 'YOUR_PROJECT_ID', // Get one from https://cloud.walletconnect.com
    chains: [baseSepolia, polygonAmoy],
  }),
  connectors: [injected()],
  ssr: true,
  transports: {
    [baseSepolia.id]: http("https://newest-radial-gadget.base-sepolia.quiknode.pro/a33177b3c598ebf17b67f1f0f3d4c4f2d7c04913"),
    [polygonAmoy.id]: http()
  },
});

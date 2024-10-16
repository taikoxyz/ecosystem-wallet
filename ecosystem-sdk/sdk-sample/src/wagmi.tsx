import {http, createConfig} from 'wagmi';
import {injected} from 'wagmi/connectors';
import { bscTestnet } from './utils/bscTest';

export const config = createConfig({
  chains: [bscTestnet],
  connectors: [injected()],
  transports: {
    [bscTestnet.id]: http(),
  },
});

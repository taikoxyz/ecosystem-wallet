import { http, createConfig } from 'wagmi'
import { baseSepolia, polygonAmoy, sepolia } from 'wagmi/chains'

export const config = createConfig({
  chains: [polygonAmoy, baseSepolia, sepolia],
  transports: {
    [polygonAmoy.id]: http(),
    [baseSepolia.id]: http("https://newest-radial-gadget.base-sepolia.quiknode.pro/a33177b3c598ebf17b67f1f0f3d4c4f2d7c04913"),
    [sepolia.id]: http(),
  },
})

declare module 'wagmi' {
  interface Register {
    config: typeof config
  }
}

import { http, createConfig } from 'wagmi'
import { ancient8Sepolia, baseSepolia, polygonAmoy, sepolia, dosChainTestnet } from 'wagmi/chains'

export const config = createConfig({
  chains: [polygonAmoy, baseSepolia, sepolia, ancient8Sepolia, dosChainTestnet],
  transports: {
    [polygonAmoy.id]: http('https://polygon-amoy.gateway.tenderly.co'),
    [baseSepolia.id]: http("https://magical-cosmological-patron.base-sepolia.quiknode.pro/819810d7c9a46c7bd8c8f58dc7b915c3b6c70996"),
    [sepolia.id]: http("https://ethereum-sepolia-rpc.publicnode.com"),
    [ancient8Sepolia.id]: http(),
    [dosChainTestnet.id]: http(),
  },
})

export type Chain = (typeof config.chains)[number]
export type ChainId = Chain['id']
export const getChainConfig = (chainId: ChainId) =>
  config.chains.find((c) => c.id === chainId)

declare module 'wagmi' {
  interface Register {
    config: typeof config
  }
}

import { http, createConfig } from 'wagmi'
import { ancient8Sepolia, baseSepolia, polygonAmoy, sepolia, dosChainTestnet, base } from 'wagmi/chains'

export const config = createConfig({
  chains: [polygonAmoy, base, baseSepolia, sepolia, ancient8Sepolia, dosChainTestnet],
  transports: {
    [polygonAmoy.id]: http('https://polygon-amoy.gateway.tenderly.co'),
    [baseSepolia.id]: http("https://clean-serene-hill.base-sepolia.quiknode.pro/8283b0346c62c49e88fbe9223b993267d39a11d7"),
    [sepolia.id]: http("https://ethereum-sepolia-rpc.publicnode.com"),
    [ancient8Sepolia.id]: http(),
    [dosChainTestnet.id]: http(),
    [base.id]: http("https://bitter-summer-vineyard.base-mainnet.quiknode.pro/40835aafefd78a9b6c442abd799f0eaba4b4b651"),
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

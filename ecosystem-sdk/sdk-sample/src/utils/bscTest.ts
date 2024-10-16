import { defineChain } from 'viem'

export const bscTestnet = defineChain({
    id: 97,
    name: 'Binance Smart Chain Testnet',
    nativeCurrency: {
        decimals: 18,
        name: 'BNB',
        symbol: 'tBNB',
    },
    rpcUrls: {
        default: {
            http: ['https://bnb-testnet.g.alchemy.com/v2/zvqJ50-05LxCZ8jaJyG3QFVFQMQfvNZP'],
            webSocket: ['wss://bnb-testnet.g.alchemy.com/v2/zvqJ50-05LxCZ8jaJyG3QFVFQMQfvNZP'],
        },
    },
    blockExplorers: {
        default: {
            name: 'BscScan',
            url: 'https://testnet.bscscan.com',
            apiUrl: 'https://api-testnet.bscscan.com/api',
        },
    },
    contracts: {
        multicall3: {
            address: '0xca11bde05977b3631167028862be2a173976ca11',
            blockCreated: 17422483,
        },
    },
    testnet: true,
})

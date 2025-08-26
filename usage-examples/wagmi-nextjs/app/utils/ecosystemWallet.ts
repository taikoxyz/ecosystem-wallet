import TaikoWallet from '@taiko/wallet';
import { baseSepolia, polygonAmoy } from 'wagmi/chains';

export const ecosystemWalletInstance = new TaikoWallet({
    appChainIds: [baseSepolia.id, polygonAmoy.id],
    appLogoUrl: 'https://a.rgbimg.com/users/b/ba/barunpatro/600/mf6B5Gq.jpg',
    appName: 'Example App',
});
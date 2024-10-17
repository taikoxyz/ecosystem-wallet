import EcosystemWallet from '@rapidfire/id';

// create the Ecosystem instance and export it so it can be used in the examples
export const ecosystemWalletInstance = new EcosystemWallet({
  clientId: process.env.NEXT_PUBLIC_CLIENT_ID!,
  redirectUri: "http://localhost:5173/redirect",
  logoutRedirectUri: "http://localhost:5173/logout",
});
# Wallet SDK

This directory contains the Ecosystem SDK and a sample project demonstrating its usage.

This SDK provides developers with the tools and interfaces necessary to interact with the ecosystem wallet.

Key features:
- Injects [EIP-1193](https://eips.ethereum.org/EIPS/eip-1193) provider to make it compatible with Viem, Ethers, Wagmi and more.

## Getting Started

### Set up

To modify the SDK, you need to set the following parameters from the SDK Sample directory.

From [index.ts](./src/index.ts) modify appearance and [branding](https://www.openfort.xyz/docs/guides/ecosystem/configuration/branding) parameters.

### Installation

```bash
yarn install
```

### Usage

To test out the SDK, from this directory:

```bash
yarn build
yarn link
```

From the SDK Sample directory, remove **@rapidfire/id** from [package.json](../usage-examples/eagmi-nextjs/package.json), run the following commands to link the SDK to the SDK Sample.

```bash
yarn link @rapidfire/id
yarn dev
```
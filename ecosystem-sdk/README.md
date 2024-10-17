# Ecosystem SDK

This directory contains the Ecosystem SDK and a sample project demonstrating its usage.

## Project Structure

```
ecosystem-sdk/
├── sdk/
└── sdk-sample/
```

### SDK

The `sdk` directory contains the core Ecosystem SDK. This SDK provides developers with the tools and interfaces necessary to interact with the ecosystem wallet.

Key features:
- Injects [EIP-1193](https://eips.ethereum.org/EIPS/eip-1193) provider to make it compatible with Viem, Ethers, Wagmi and more.

### SDK Sample

The `sdk-sample` directory contains example projects and code snippets that demonstrate how to use the Ecosystem SDK effectively.

## Getting Started

### Prerequisites

#### SDK

Go to [index.ts](./sdk/src/index.ts) and set the following environment variables:
```
ecosystemWalletDomain:
ecosystemPublishableKey:
icon:
logo:
name:
reverseDomainNameSystem:
```

#### SDK Sample

```.env
NEXT_PUBLIC_POLICY_ID=
NEXT_PUBLIC_CLIENT_ID=
```

### Installation

#### SDK

```bash
cd sdk
yarn install
```

#### SDK Sample

```bash
cd sdk-sample
yarn install
```

### Usage

To test out the Ecosystem SDK, run the following commands to link the SDK to the SDK Sample:

#### SDK

```bash
cd sdk
yarn build
yarn link
```

#### SDK Sample

```bash
cd sdk-sample
yarn link @ecosystem/sdk
yarn dev
```

The SDK sample includes samples with `wagmi`, `ethers`, directly with `EIP-1193` and `rainbowKit`. You can find the code snippets in the [app directory](./sdk-sample/app/).
The [RainbowKit sample](./sdk-sample/app/connect-with-rainbow/) includes samples with `eth_sendTransaction`, `personal_signature` and more.
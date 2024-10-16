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

```.env
REACT_APP_ECOSYSTEM_WALLET_DOMAIN=
REACT_APP_ECOSYSTEM_PUBLISHABLE_KEY=
REACT_APP_APPEARANCE_NAME=
REACT_APP_APPEARANCE_REVERSE_DOMAIN_NAME_SYSTEM=
REACT_APP_APPEARANCE_ICON=
REACT_APP_APPEARANCE_LOGO=
```

#### SDK Sample

```.env
REACT_APP_POLICY_ID=
REACT_APP_CLIENT_ID=
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
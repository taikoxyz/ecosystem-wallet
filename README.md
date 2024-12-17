# Ecosystem SDK Sample

This is a demo NextJS app that uses the ecosystem SDK to connect to the Rapid Fire ecosystem

To try the demo, go to https://rapidfire.sample.openfort.xyz/ and login with ConnectKit.

## Project Structure

This project consists of two main components: the Ecosystem SDK and the Ecosystem Wallet.

```
ecosystem-project/
├── ecosystem-sdk/
│   ├── sdk/
│   └── sdk-sample/
├── ecosystem-wallet/
│   ├── backend/
│   └── frontend/
└── README.md
```

## Ecosystem SDK

The Ecosystem SDK is divided into two parts:

- `sdk`: This directory contains the core SDK for interacting with your ecosystem wallet.
- `sdk-sample`: This directory provides examples and demonstrations of how to use the Ecosystem SDK.

For more details, see the [Ecosystem SDK README](./ecosystem-sdk/README.md).

## Ecosystem Wallet

The Ecosystem Wallet is a complete solution for managing digital assets within the ecosystem:

- `frontend`: Contains the user interface for the wallet, including pages for sending transactions, signing messages, managing session keys, and more.
- `backend`: Houses the server-side logic, currently focused on supporting non-custodial wallets.

For more information, refer to the [Ecosystem Wallet README](./ecosystem-wallet/README.md).

## Getting Started

Please refer to the individual README files in each project directory for specific setup and usage instructions.

# Ecosystem Wallet

The Ecosystem Wallet is a comprehensive solution for managing digital assets within the ecosystem. It consists of a frontend user interface and a backend server.

## Project Structure

```
ecosystem-wallet/
├── frontend/
└── backend/
```

### Frontend

The `frontend` directory contains the user interface for the Ecosystem Wallet. It includes all necessary pages and components for a complete wallet experience. It comes with non-custodial signer management.

Key features:
- Sending transactions
- Signing messages
- Creating session keys
- Batched transactions
- Signing typed messages

### Backend

The `backend` directory contains the server-side logic for the Ecosystem Wallet. Currently, it focuses on supporting non-custodial wallets through a shield encryption session creation.

Key features:
- API endpoint for non-custodial wallet operations

## Getting Started

### Prerequisites

#### Frontend
```.env
REACT_APP_APP_NAME=
REACT_APP_OPENFORT_PUBLIC_KEY=
REACT_APP_SHIELD_PUBLIC_KEY=
REACT_APP_BACKEND_URL=
REACT_APP_OPENFORT_ECOSYSTEM_ID=
```

#### Backend
```.env
OPENFORT_SECRET_KEY=
OPENFORT_PUBLIC_KEY=
SHIELD_PUBLIC_KEY=
```

### Installation

#### Frontend
```bash
cd frontend
yarn install
```

#### Backend
```bash
cd backend
yarn install
```

### Running the Application

#### Frontend
```bash
cd frontend
yarn start
```

#### Backend
```bash
cd backend
yarn dev
```
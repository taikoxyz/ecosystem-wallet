# Wallet UI Backend

This backend provides API endpoints for the Wallet UI application and can be deployed as serverless functions on Vercel.

## 🚀 Quick Start

### Local Development

1. Install dependencies:
```bash
npm install
```

2. Copy and configure environment variables:
```bash
cp .env.example .env
# Edit .env with your actual values
```

3. Start development server:
```bash
npm run dev
```

### Deployment

#### Vercel (Recommended)
See [README-vercel.md](./README-vercel.md) for detailed Vercel deployment instructions.

#### Traditional Server
For traditional server deployment, use the Express.js version in `src/index.express.ts`.

## 📁 Project Structure

```
├── api/                          # Serverless functions for Vercel
│   ├── index.ts                 # API info endpoint
│   ├── health.ts                # Health check endpoint
│   └── protected-create-encryption-session.ts
├── src/                         # Original Express.js server (deprecated)
│   └── index.express.ts         # Original Express server file
├── .env.example                 # Environment variables template
├── vercel.json                  # Vercel configuration
├── package.json
└── README.md
```

## 🔧 API Endpoints

- `GET /api` - API information
- `GET /api/health` - Health check
- `POST /api/protected-create-encryption-session` - Create encryption session (requires authentication)

## 🌍 Environment Variables

Set these in your deployment environment:

### Development
- `OPENFORT_SECRET_KEY`
- `SHIELD_PUBLIC_KEY`
- `SHIELD_SECRET_KEY`  
- `ENCRYPTION_SHARE`

### Production
- `OPENFORT_PROD_SECRET_KEY`
- `SHIELD_PROD_PUBLIC_KEY`
- `SHIELD_PROD_SECRET_KEY`
- `ENCRYPTION_PROD_SHARE`

## 🔄 Migration from Express

This backend has been migrated from a traditional Express.js server to Vercel serverless functions. The original Express code is preserved in `src/index.express.ts` for reference.

Key changes:
- Each route is now a separate serverless function
- CORS is handled per function
- No server startup required
- Auto-scaling provided by Vercel

## 📚 Documentation

- [Vercel Deployment Guide](./README-vercel.md)
- [Environment Variables](./.env.example)

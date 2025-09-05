# Wallet UI Backend - Vercel Deployment

This backend has been configured to run as serverless functions on Vercel.

## Local Development

1. Install dependencies:
```bash
yarn install
```

2. Copy environment variables:
```bash
cp .env.example .env
```

3. Fill in your environment variables in `.env`

4. Start the development server:
```bash
yarn dev
```

This will start the Vercel development server which mimics the serverless environment locally.

## Deployment to Vercel

### Option 1: Using Vercel CLI

1. Install Vercel CLI globally:
```bash
npm i -g vercel
```

2. Login to Vercel:
```bash
vercel login
```

3. Deploy to staging:
```bash
vercel
```

4. Deploy to production:
```bash
vercel --prod
```

### Option 2: Using GitHub Integration

1. Push your code to GitHub
2. Connect your repository to Vercel via the Vercel dashboard
3. Configure environment variables in Vercel dashboard
4. Vercel will automatically deploy on every push to main branch

## Environment Variables

Make sure to set these environment variables in your Vercel project settings:

### Development Environment Variables
- `OPENFORT_SECRET_KEY`
- `SHIELD_PUBLIC_KEY`
- `SHIELD_SECRET_KEY`
- `ENCRYPTION_SHARE`

### Production Environment Variables
- `OPENFORT_PROD_SECRET_KEY`
- `SHIELD_PROD_PUBLIC_KEY`
- `SHIELD_PROD_SECRET_KEY`
- `ENCRYPTION_PROD_SHARE`

## API Endpoints

After deployment, your API endpoints will be available at:

- `GET /api/health` - Health check endpoint
- `POST /api/protected-create-encryption-session` - Create encryption session

## Changes Made for Vercel

1. **Restructured as serverless functions**: Each API endpoint is now a separate file in the `/api` directory
2. **Updated package.json**: Added Vercel CLI and @vercel/node dependencies
3. **Created vercel.json**: Configuration file for Vercel deployment
4. **Updated TypeScript config**: Modified to include API directory
5. **Removed Express server**: Replaced with Vercel's serverless function format

## Notes

- CORS is handled in each individual API route
- Environment variable validation is done at the function level
- No server startup is needed - functions are cold-started on demand
- Each function runs independently and is automatically scaled by Vercel

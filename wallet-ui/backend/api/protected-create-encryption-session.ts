import Openfort from '@openfort/openfort-node';
import type { VercelRequest, VercelResponse } from '@vercel/node';

export default async function handler(req: VercelRequest, res: VercelResponse) {
  // Enable CORS
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');

  if (req.method === 'OPTIONS') {
    res.status(200).end();
    return;
  }

  if (req.method !== 'POST') {
    res.status(405).json({ error: 'Method not allowed' });
    return;
  }

  try {
    const accessToken = req.headers.authorization?.split(' ')[1];
    if (!accessToken) {
      return res.status(401).json({
        error: 'You must be signed in to view the protected content on this page.',
      });
    }

    const { isProd } = req.body;

    // Check if required environment variables are present
    if (!process.env.OPENFORT_SECRET_KEY || !process.env.SHIELD_PUBLIC_KEY || !process.env.SHIELD_SECRET_KEY || !process.env.ENCRYPTION_SHARE) {
      return res.status(500).json({
        error: 'Development environment variables are not configured properly.',
      });
    }

    let openfortKey, shieldPublicKey, shieldSecretKey, encryptionShare;

    if (isProd) {
      if (!process.env.OPENFORT_PROD_SECRET_KEY || !process.env.SHIELD_PROD_PUBLIC_KEY ||
        !process.env.SHIELD_PROD_SECRET_KEY || !process.env.ENCRYPTION_PROD_SHARE) {
        return res.status(500).json({
          error: 'Production environment variables are not configured properly.',
        });
      }
      openfortKey = process.env.OPENFORT_PROD_SECRET_KEY;
      shieldPublicKey = process.env.SHIELD_PROD_PUBLIC_KEY;
      shieldSecretKey = process.env.SHIELD_PROD_SECRET_KEY;
      encryptionShare = process.env.ENCRYPTION_PROD_SHARE;
    } else {
      openfortKey = process.env.OPENFORT_SECRET_KEY;
      shieldPublicKey = process.env.SHIELD_PUBLIC_KEY;
      shieldSecretKey = process.env.SHIELD_SECRET_KEY;
      encryptionShare = process.env.ENCRYPTION_SHARE;
    }

    const openfort = new Openfort(openfortKey);
    await openfort.iam.verifyAuthToken(accessToken);
    const session = await openfort.registerRecoverySession(shieldPublicKey, shieldSecretKey, encryptionShare);

    res.status(200).json({ session });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
}

import { Client } from "@openfort/ecosystem-js/client";
import dotenv from 'dotenv';

dotenv.config();

class EcosystemWallet extends Client {
    constructor({ clientId, redirectUri, logoutRedirectUri }: { clientId: string, redirectUri: string, logoutRedirectUri: string }) {
        super({
            redirectUri: redirectUri,
            logoutRedirectUri: logoutRedirectUri,
            baseConfig: {
                ecosystemWalletDomain: process.env.ECOSYSTEM_WALLET_DOMAIN!,
                publishableKey: clientId,
                ecosystemPublishableKey: process.env.ECOSYSTEM_PUBLISHABLE_KEY!,
            },
            appearance: {
                // @ts-ignore
                icon: process.env.APPEARANCE_ICON!,
                logo: process.env.APPEARANCE_LOGO!,
                name: process.env.APPEARANCE_NAME!,
                reverseDomainNameSystem: process.env.APPEARANCE_REVERSE_DOMAIN_NAME_SYSTEM!
            }
        });

        // Use a Proxy to allow for new method additions
        return new Proxy(this, {
            get: (target, prop) => {
                if (prop in target) {
                    const value = target[prop as keyof EcosystemWallet];
                    return typeof value === 'function' ? value.bind(target) : value;
                }
                return undefined;
            }
        });
    }

    // Add new methods here
    newMethod() {
        console.log('This is a new method in the new SDK');
    }

    // Override existing methods here
    someExistingMethod(...args: any[]) {
        console.log('This method has been overridden in the new SDK');
        return super.login(...args);
    }
}

export default EcosystemWallet;
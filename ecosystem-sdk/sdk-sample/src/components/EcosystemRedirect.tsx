import EcosystemWallet from "@openfort/ecosystem-client-sdk-sample-app";
import { useEffect } from "react";

function EcosystemRedirect({
  ecosystemWalletInstance,
}: {
  ecosystemWalletInstance: EcosystemWallet;
}) {
  useEffect(() => {
    ecosystemWalletInstance.loginCallback();
  }, [ecosystemWalletInstance]);

  return <div>Loading...</div>;
}

export default EcosystemRedirect;

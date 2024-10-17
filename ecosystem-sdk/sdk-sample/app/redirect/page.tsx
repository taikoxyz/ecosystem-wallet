'use client';

import { useEffect } from 'react';
import { ecosystemWalletInstance } from '../utils/ecosystemWallet';

export default function Redirect() {
  useEffect(() => {
    // call the loginCallback function after the login is complete
    ecosystemWalletInstance.loginCallback();
  }, []);

  // render the view for the login popup after the login is complete
  return (
    <h1>Logged in</h1>
  );
}

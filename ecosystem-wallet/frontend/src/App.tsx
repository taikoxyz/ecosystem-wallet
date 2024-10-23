import { 
  WalletGrantPermissions,
  WalletSendCalls, 
  EthRequestAccounts, 
  AppState, 
  EthSendTransaction, 
  EthSignTypedDataV4, 
  FortProvider, 
  PersonalSign, 
  withAuthenticationRequired,
  Settings,
  UnsupportedMethod
} from '@openfort/ecosystem-js/react';
import { Route, Routes, useNavigate } from 'react-router-dom';
import { polygonAmoy } from 'viem/chains';
import Loading from './Loading';


// const themeOverride: FortThemeOverride = {
//   colors: {
//     "bg000": "#141519",
//     "bg100": "#141518",
//     "bg200": "#242727",
//     "text": "#8a919e",
//     "title": "#ffffff"
//   }
// }

/*
 * Make a request to your backend and return a session ID
 * @param accessToken 
 * @returns session ID
 */
async function getShieldSession(accessToken:string):Promise<string> {
  const response = await fetch(`${process.env.REACT_APP_BACKEND_URL!}/api/protected-create-encryption-session`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${accessToken}`
    }
  });

  if (!response.ok) {
    throw new Error('Failed to fetch shield session');
  }

  const data = await response.json();
  return data.session;
}

const ProtectedRoute = ({ component, ...args }: any) => {
  const Component = withAuthenticationRequired(component, {
    onRedirecting: () => <Loading />,
  });
  return <Component {...args} />;
};



function App() {
  const nav = useNavigate()

  return (
    <FortProvider 
      appName={process.env.REACT_APP_APP_NAME}
      defaultChain={polygonAmoy}
      onRedirectCallback={(appState?: AppState) => nav((appState && appState.returnTo) || window.location.pathname)} 
      publishableKey={process.env.REACT_APP_OPENFORT_PUBLIC_KEY!}
      ecosystemId={process.env.REACT_APP_OPENFORT_ECOSYSTEM_ID!}
      shieldConfig={{
        shieldPublishableKey: process.env.REACT_APP_SHIELD_PUBLIC_KEY!,
        getShieldSession: getShieldSession 
      }}
      >
      <Routes>
        <Route path='/sign/personal-sign' element={<ProtectedRoute component={PersonalSign} />} />
        <Route path='/sign/eth-sign-typed-data-v-4' element={<ProtectedRoute component={EthSignTypedDataV4} />} />
        <Route path='/sign/eth-send-transaction' element={<ProtectedRoute component={EthSendTransaction} />} />
        <Route path='/sign/wallet-grant-permissions' element={<ProtectedRoute component={WalletGrantPermissions} />} />
        <Route path='/sign/wallet-send-calls' element={<ProtectedRoute component={WalletSendCalls} />} />
        <Route path='/sign/eth-request-accounts' element={<ProtectedRoute component={EthRequestAccounts} />} />
        <Route path='/settings' element={<ProtectedRoute component={Settings} />} />
        <Route path='/sign/loading' element={<ProtectedRoute component={Loading} />} />
        <Route path='/' element={<Loading />} />
        {/* This should be replaced with <UnsupportedMethod /> on production */}
        <Route path='*' element={<UnsupportedMethod />} />
      </Routes>
    </FortProvider>
  );
}

export default App;

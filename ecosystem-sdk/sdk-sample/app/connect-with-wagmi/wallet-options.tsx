import { useState, useEffect } from 'react';
import { Connector, useConnect } from 'wagmi';

export function WalletOptions() {
  const { connectors, connect } = useConnect();
  const [loading, setLoadingState] = useState<boolean>(false);

  function ecosystemWalletLogin(connector: Connector) {
    setLoadingState(true);
    connect({ connector });
  }

  return (
    <div className="space-y-4">
      <p className="text-lg font-semibold text-blue-800 mb-2">Connect with:</p>
      {connectors.map((connector) => (
        <button
          key={connector.uid}
          type="button"
          onClick={() => ecosystemWalletLogin(connector)}
          disabled={loading}
          className="w-full py-2 px-4 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {connector.name}
        </button>
      ))}
      {loading && (
        <div className="text-center">
          <p className="text-blue-600">Loading...</p>
          <div className="mt-2 inline-block h-8 w-8 animate-spin rounded-full border-4 border-solid border-blue-600 border-r-transparent align-[-0.125em] motion-reduce:animate-[spin_1.5s_linear_infinite]"></div>
        </div>
      )}
    </div>
  );
}
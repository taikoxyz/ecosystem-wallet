'use client';

import Link from 'next/link';

export default function Logout() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-100 to-blue-200 flex flex-col items-center justify-center p-6">
      <div className="bg-white rounded-lg shadow-md p-8 max-w-md w-full text-center">
        <h1 className="text-3xl font-bold text-blue-800 mb-6">
          Logged Out
        </h1>
        <p className="text-gray-600 mb-6">
          You have been successfully logged out of your account.
        </p>
        <Link 
          href="/" 
          className="inline-block bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded transition duration-300"
        >
          Return to Examples
        </Link>
      </div>
    </div>
  );
}
'use client';
import Link from 'next/link';

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-100 to-blue-200 flex flex-col items-center justify-center p-6">
      <h1 className="text-4xl font-bold text-blue-800 mb-8">
        Ecosystem Connect Examples
      </h1>
      <div className="space-y-4">
        <Link 
          href="/connect-with-eip1193"
          className="block w-64 p-4 text-center bg-white text-blue-600 rounded-lg shadow-md hover:bg-blue-50 transition duration-300"
        >
          Connect with EIP-1193
        </Link>
        <Link 
          href="/connect-with-etherjs"
          className="block w-64 p-4 text-center bg-white text-blue-600 rounded-lg shadow-md hover:bg-blue-50 transition duration-300"
        >
          Connect with EtherJS
        </Link>
        <Link 
          href="/connect-with-wagmi"
          className="block w-64 p-4 text-center bg-white text-blue-600 rounded-lg shadow-md hover:bg-blue-50 transition duration-300"
        >
          Connect with Wagmi
        </Link>
        <Link 
          href="/connect-with-rainbow"
          className="block w-64 p-4 text-center bg-white text-blue-600 rounded-lg shadow-md hover:bg-blue-50 transition duration-300"
        >
          Connect with Rainbow
        </Link>
      </div>
    </div>
  );
}
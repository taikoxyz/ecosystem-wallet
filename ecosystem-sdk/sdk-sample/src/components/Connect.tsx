import {ConnectButton} from '@rainbow-me/rainbowkit';
import { bscTestnet } from 'viem/chains';
import {type BaseError, useAccount, useSignTypedData, useWaitForTransactionReceipt, useWriteContract, useSignMessage} from 'wagmi';
import { encodeFunctionData } from 'viem';
import { generatePrivateKey, privateKeyToAccount } from 'viem/accounts';

const abi = [
  {
    "inputs": [],
    "stateMutability": "nonpayable",
    "type": "constructor"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": true,
        "internalType": "address",
        "name": "owner",
        "type": "address"
      },
      {
        "indexed": true,
        "internalType": "address",
        "name": "approved",
        "type": "address"
      },
      {
        "indexed": true,
        "internalType": "uint256",
        "name": "tokenId",
        "type": "uint256"
      }
    ],
    "name": "Approval",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": true,
        "internalType": "address",
        "name": "owner",
        "type": "address"
      },
      {
        "indexed": true,
        "internalType": "address",
        "name": "operator",
        "type": "address"
      },
      {
        "indexed": false,
        "internalType": "bool",
        "name": "approved",
        "type": "bool"
      }
    ],
    "name": "ApprovalForAll",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": true,
        "internalType": "address",
        "name": "from",
        "type": "address"
      },
      {
        "indexed": true,
        "internalType": "address",
        "name": "to",
        "type": "address"
      },
      {
        "indexed": true,
        "internalType": "uint256",
        "name": "tokenId",
        "type": "uint256"
      }
    ],
    "name": "Transfer",
    "type": "event"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "to",
        "type": "address"
      },
      {
        "internalType": "uint256",
        "name": "tokenId",
        "type": "uint256"
      }
    ],
    "name": "approve",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "owner",
        "type": "address"
      }
    ],
    "name": "balanceOf",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "tokenId",
        "type": "uint256"
      }
    ],
    "name": "getApproved",
    "outputs": [
      {
        "internalType": "address",
        "name": "",
        "type": "address"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "owner",
        "type": "address"
      },
      {
        "internalType": "address",
        "name": "operator",
        "type": "address"
      }
    ],
    "name": "isApprovedForAll",
    "outputs": [
      {
        "internalType": "bool",
        "name": "",
        "type": "bool"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "to",
        "type": "address"
      },
      {
        "internalType": "uint256",
        "name": "tokenId",
        "type": "uint256"
      }
    ],
    "name": "mint",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "name",
    "outputs": [
      {
        "internalType": "string",
        "name": "",
        "type": "string"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "tokenId",
        "type": "uint256"
      }
    ],
    "name": "ownerOf",
    "outputs": [
      {
        "internalType": "address",
        "name": "",
        "type": "address"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "from",
        "type": "address"
      },
      {
        "internalType": "address",
        "name": "to",
        "type": "address"
      },
      {
        "internalType": "uint256",
        "name": "tokenId",
        "type": "uint256"
      }
    ],
    "name": "safeTransferFrom",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "from",
        "type": "address"
      },
      {
        "internalType": "address",
        "name": "to",
        "type": "address"
      },
      {
        "internalType": "uint256",
        "name": "tokenId",
        "type": "uint256"
      },
      {
        "internalType": "bytes",
        "name": "data",
        "type": "bytes"
      }
    ],
    "name": "safeTransferFrom",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "operator",
        "type": "address"
      },
      {
        "internalType": "bool",
        "name": "approved",
        "type": "bool"
      }
    ],
    "name": "setApprovalForAll",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "bytes4",
        "name": "interfaceId",
        "type": "bytes4"
      }
    ],
    "name": "supportsInterface",
    "outputs": [
      {
        "internalType": "bool",
        "name": "",
        "type": "bool"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "symbol",
    "outputs": [
      {
        "internalType": "string",
        "name": "",
        "type": "string"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "tokenId",
        "type": "uint256"
      }
    ],
    "name": "tokenURI",
    "outputs": [
      {
        "internalType": "string",
        "name": "",
        "type": "string"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "from",
        "type": "address"
      },
      {
        "internalType": "address",
        "name": "to",
        "type": "address"
      },
      {
        "internalType": "uint256",
        "name": "tokenId",
        "type": "uint256"
      }
    ],
    "name": "transferFrom",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  }
];

export function Connect() {
  const {isConnected} = useAccount();
  const {data: hash, writeContract, isPending, error} = useWriteContract();
  const {isLoading: isConfirming, isSuccess: isConfirmed} = useWaitForTransactionReceipt({
    hash,
  });
  const {connector} = useAccount();

  const {signTypedData, data: typedSignature, isPending: isSigning, error: errorTypedSignature} = useSignTypedData();
  const { signMessage, data: personalSignature, isPending: personalIsSigning, error: errorPersonalSignature } = useSignMessage()
  return (
    <div>
      <ConnectButton />
      {isConnected && (
        <div>
          <div>
            <div className="text">{'eth_sendTransaction'}</div>
              {hash && <div className="subtext">Transaction Hash: {hash}</div>}
              {isConfirming && <div className="subtext">Waiting for confirmation...</div>}
              {isConfirmed && <div className="subtext">Transaction confirmed.</div>}
              {error && <div className="subtext">Error: {(error as BaseError).shortMessage || error.message}</div>}
              <button
                disabled={isPending}
                onClick={() => {
                  writeContract({
                    abi,
                    address: '0x6b4582165Ef6e79489769ea62f8287C515e44FB6',
                    functionName: 'mint',
                    args: ['0xd2135CfB216b74109775236E36d4b433F1DF507B', new Date().getTime()],
                  });
                }}
              >
                {isPending ? 'Confirming...' : 'Example Tx'}
              </button>
            </div>
          <div>
          <div>
            <div>{'eth_signTypedData_v4'}</div>
            {typedSignature && <div>Signature: {typedSignature}</div>}
            {errorTypedSignature && (
              <div>
                Error: {(errorTypedSignature as BaseError).shortMessage || errorTypedSignature.message}
              </div>
            )}
            <button
              className="button"
              disabled={isSigning}
              onClick={() => {
                signTypedData({
                  domain: {
                    chainId: bscTestnet.id,
                    name: 'Ether Mail',
                    verifyingContract: '0xCcCCccccCCCCcCCCCCCcCcCccCcCCCcCcccccccC',
                    version: '1',
                  } as const,
                  types,
                  message: {
                    from: {
                      name: 'Alice',
                      wallet: '0x2111111111111111111111111111111111111111',
                    },
                    to: {
                      name: 'Bob',
                      wallet: '0x3111111111111111111111111111111111111111',
                    },
                    content: 'Hello!',
                  },
                  primaryType: 'Mail',
                });
              }}
            >
              {isPending ? 'Confirming...' : 'Example Typed Message'}
            </button>
          </div>
          </div>
          <div>
            <div>
              <div>{'personal_sign'}</div>
              {personalSignature && <div>Signature: {personalSignature}</div>}
              {errorPersonalSignature && (
                <div>
                  Error: {(errorPersonalSignature as BaseError).shortMessage || errorPersonalSignature.message}
                </div>
              )}
              <button
                className="button"
                disabled={personalIsSigning}
                onClick={() => {
                  signMessage({message:'Hello World'});
                }}
              >
                {isPending ? 'Confirming...' : 'Example Message'}
              </button>
            </div>
          </div>
          <div>
            <div>
              <div>{'wallet_grantPermissions'}</div>
      
              <button
                className="button"
                onClick={async() => {
                  const provider = await connector?.getProvider()
                  const privateKey = generatePrivateKey();
                  const account = privateKeyToAccount(privateKey)
                  //@ts-ignore
                  const hash = await provider.request({ method: 'wallet_grantPermissions', address: account.address, expiry: 60*60*1000 });
                  console.log(`hash: ${hash}`)
                }}
              >
                {isPending ? 'Confirming...' : 'Example Session'}
              </button>
            </div>
          </div>
          <div>
            <div>
              <div>{'wallet_sendCalls'}</div>
    
              <button
                className="button"
                onClick={async() => {
                  const provider = await connector?.getProvider()
                  //@ts-ignore
                  const address = await provider.request({ method: 'wallet_sendCalls', calls: [{to:"0x6b4582165Ef6e79489769ea62f8287C515e44FB6", data: encodeFunctionData({abi, functionName:'mint', args: ['0xd2135CfB216b74109775236E36d4b433F1DF507B', new Date().getTime()]})},{to:"0x6b4582165Ef6e79489769ea62f8287C515e44FB6", data:encodeFunctionData({abi, functionName:'mint', args: ['0xd2135CfB216b74109775236E36d4b433F1DF507B', new Date().getTime()]})}] });
                  console.log(`address: ${address}`)
                }}
              >
                {isPending ? 'Confirming...' : 'Example Batched'}
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

const types = {
  Mail: [
    {name: 'from', type: 'Person'},
    {name: 'to', type: 'Person'},
    {name: 'content', type: 'string'},
  ],
  Person: [
    {name: 'name', type: 'string'},
    {name: 'wallet', type: 'address'},
  ],
};
'use client'

import React from 'react'
import { useAccount, useBalance, useDisconnect } from 'wagmi'
import { formatEther } from 'viem'

export function WalletInfo() {
  const { address, isConnected, chain } = useAccount()
  const { data: balance } = useBalance({
    address: address,
  })
  const { disconnect } = useDisconnect()

  if (!isConnected || !address) {
    return null
  }

  const formatAddress = (addr: string) => {
    return `${addr.slice(0, 6)}...${addr.slice(-4)}`
  }

  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 max-w-md mx-auto">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
          Wallet Connected
        </h3>
        <button
          onClick={() => disconnect()}
          className="text-sm text-red-600 hover:text-red-800 dark:text-red-400 dark:hover:text-red-300"
        >
          Disconnect
        </button>
      </div>
      
      <div className="space-y-3">
        <div>
          <p className="text-sm text-gray-600 dark:text-gray-400">Address</p>
          <p className="font-mono text-sm text-gray-900 dark:text-white">
            {formatAddress(address)}
          </p>
        </div>
        
        {balance && (
          <div>
            <p className="text-sm text-gray-600 dark:text-gray-400">Balance</p>
            <p className="text-lg font-semibold text-gray-900 dark:text-white">
              {parseFloat(formatEther(balance.value)).toFixed(4)} {balance.symbol}
            </p>
          </div>
        )}
        
        {chain && (
          <div>
            <p className="text-sm text-gray-600 dark:text-gray-400">Network</p>
            <p className="text-sm text-gray-900 dark:text-white">
              {chain.name}
            </p>
          </div>
        )}
      </div>
    </div>
  )
}

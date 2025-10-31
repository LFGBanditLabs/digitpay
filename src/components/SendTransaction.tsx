'use client'

import React, { useState } from 'react'
import { useSendTransaction, useAccount, useWaitForTransactionReceipt } from 'wagmi'
import { parseEther, isAddress } from 'viem'

export function SendTransaction() {
  const { isConnected } = useAccount()
  const [to, setTo] = useState('')
  const [amount, setAmount] = useState('')
  const [isLoading, setIsLoading] = useState(false)

  const { data: hash, sendTransaction, error, isPending } = useSendTransaction()

  const { isLoading: isConfirming, isSuccess: isConfirmed } = useWaitForTransactionReceipt({
    hash,
  })

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    
    if (!isAddress(to)) {
      alert('Please enter a valid Ethereum address')
      return
    }

    if (!amount || parseFloat(amount) <= 0) {
      alert('Please enter a valid amount')
      return
    }

    try {
      setIsLoading(true)
      await sendTransaction({
        to: to as `0x${string}`,
        value: parseEther(amount),
      })
    } catch (err) {
      console.error('Transaction failed:', err)
    } finally {
      setIsLoading(false)
    }
  }

  if (!isConnected) {
    return (
      <div className="bg-gray-100 dark:bg-gray-800 rounded-lg p-6 text-center">
        <p className="text-gray-600 dark:text-gray-400">
          Please connect your wallet to send transactions
        </p>
      </div>
    )
  }

  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 max-w-md mx-auto">
      <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
        Send Payment
      </h3>
      
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
            Recipient Address
          </label>
          <input
            type="text"
            value={to}
            onChange={(e) => setTo(e.target.value)}
            placeholder="0x..."
            className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:text-white"
            required
          />
        </div>
        
        <div>
          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
            Amount (ETH)
          </label>
          <input
            type="number"
            step="0.001"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            placeholder="0.001"
            className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:text-white"
            required
          />
        </div>
        
        <button
          type="submit"
          disabled={isPending || isLoading || isConfirming}
          className="w-full bg-blue-600 hover:bg-blue-700 disabled:bg-gray-400 text-white font-medium py-2 px-4 rounded-md transition-colors"
        >
          {isPending || isLoading ? 'Preparing...' : isConfirming ? 'Confirming...' : 'Send Payment'}
        </button>
      </form>
      
      {hash && (
        <div className="mt-4 p-3 bg-blue-50 dark:bg-blue-900/20 rounded-md">
          <p className="text-sm text-blue-800 dark:text-blue-200">
            Transaction Hash: {hash.slice(0, 10)}...{hash.slice(-8)}
          </p>
          {isConfirmed && (
            <p className="text-sm text-green-600 dark:text-green-400 mt-1">
              ✅ Transaction confirmed!
            </p>
          )}
        </div>
      )}
      
      {error && (
        <div className="mt-4 p-3 bg-red-50 dark:bg-red-900/20 rounded-md">
          <p className="text-sm text-red-800 dark:text-red-200">
            Error: {error.message}
          </p>
        </div>
      )}
    </div>
  )
}

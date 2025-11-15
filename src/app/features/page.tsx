'use client'

import { Navigation } from '@/components/Navigation'

const features = [
  {
    icon: '🔄',
    title: 'Crypto-to-Fiat Conversion',
    description: 'Convert supported cryptocurrencies (e.g., Bitcoin, Ethereum, USDT) into fiat currencies (USD, EUR, NGN, etc.) in real time.',
    color: 'blue',
  },
  {
    icon: '💳',
    title: 'Merchant Payments',
    description: 'Use your crypto balance to pay for goods and services directly through integrated payment gateways or partner merchants.',
    color: 'green',
  },
  {
    icon: '🪪',
    title: 'User Wallet Integration',
    description: 'Connect popular Web3 wallets like MetaMask, WalletConnect, or Trust Wallet to fund your account or make payments.',
    color: 'purple',
  },
  {
    icon: '🏦',
    title: 'Instant Settlement',
    description: 'Funds are instantly converted and settled in merchants\' fiat accounts, ensuring smooth transactions and stable pricing.',
    color: 'indigo',
  },
  {
    icon: '🔐',
    title: 'Security & Compliance',
    description: 'DigitPay uses end-to-end encryption, KYC verification, and smart contract-based escrow to ensure safety and compliance with financial regulations.',
    color: 'red',
  },
  {
    icon: '💼',
    title: 'Multi-Currency Support',
    description: 'Supports multiple crypto and fiat pairs, enabling global reach and flexible payments across different markets.',
    color: 'yellow',
  },
]

const techStack = [
  { layer: 'Frontend', tech: 'React, TailwindCSS, Next.js' },
  { layer: 'Backend', tech: 'Node.js, Express, MongoDB' },
  { layer: 'Blockchain', tech: 'Ethereum / Lisk / Polygon (via Ethers.js or Web3.js)' },
  { layer: 'Payment API', tech: 'Paystack / Stripe / Flutterwave' },
  { layer: 'Authentication', tech: 'JWT, OAuth, MetaMask' },
  { layer: 'Deployment', tech: 'Vercel / Render / AWS' },
]

export default function FeaturesPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-900 dark:to-gray-800">
      <Navigation />
      
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-gray-900 dark:text-white mb-4">
            DigitPay Features
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Bridging Crypto to Real-World Payments
          </p>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-4xl mx-auto mt-6">
            DigitPay is a next-generation payment platform that enables users to convert their 
            cryptocurrency holdings into fiat and seamlessly use them to pay for goods and services 
            in the real world.
          </p>
        </div>

        {/* Key Features Grid */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white text-center mb-12">
            Key Features
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 p-8 group"
              >
                <div className="text-6xl mb-6 group-hover:scale-110 transition-transform duration-300">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                  {feature.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Architecture Overview */}
        <div className="mb-16">
          <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-8 lg:p-12">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white text-center mb-12">
              Architecture Overview
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-20 h-20 bg-blue-100 dark:bg-blue-900 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <svg className="w-10 h-10 text-blue-600 dark:text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">Frontend</h3>
                <p className="text-gray-600 dark:text-gray-400 mb-4">
                  Built with modern frameworks (React, Tailwind, Next.js). Provides an intuitive 
                  dashboard for balance tracking, conversion, and payments.
                </p>
              </div>

              <div className="text-center">
                <div className="w-20 h-20 bg-green-100 dark:bg-green-900 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <svg className="w-10 h-10 text-green-600 dark:text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">Backend</h3>
                <p className="text-gray-600 dark:text-gray-400 mb-4">
                  Handles user authentication, wallet linking, fiat conversion, and merchant settlement. 
                  Integrates with blockchain APIs and payment APIs.
                </p>
                <p className="text-sm text-gray-500 dark:text-gray-500">
                  Technologies: Node.js, Express, MongoDB, Web3.js / Ethers.js
                </p>
              </div>

              <div className="text-center">
                <div className="w-20 h-20 bg-purple-100 dark:bg-purple-900 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <svg className="w-10 h-10 text-purple-600 dark:text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">Smart Contracts</h3>
                <p className="text-gray-600 dark:text-gray-400 mb-4">
                  Securely handle crypto deposits, withdrawals, and conversion triggers. Ensures 
                  transparency and traceability on supported blockchain networks.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Tech Stack */}
        <div className="mb-16">
          <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-8 lg:p-12">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white text-center mb-12">
              Technology Stack
            </h2>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-gray-200 dark:border-gray-700">
                    <th className="text-left py-4 px-6 text-sm font-semibold text-gray-900 dark:text-white">Layer</th>
                    <th className="text-left py-4 px-6 text-sm font-semibold text-gray-900 dark:text-white">Technology</th>
                  </tr>
                </thead>
                <tbody>
                  {techStack.map((stack, index) => (
                    <tr
                      key={index}
                      className="border-b border-gray-200 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-700/50 transition-colors"
                    >
                      <td className="py-4 px-6 font-medium text-gray-900 dark:text-white">{stack.layer}</td>
                      <td className="py-4 px-6 text-gray-600 dark:text-gray-400">{stack.tech}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>

        {/* Future Roadmap */}
        <div className="bg-gradient-to-r from-indigo-600 to-purple-600 rounded-2xl shadow-xl p-8 lg:p-12 text-white">
          <h2 className="text-3xl font-bold text-center mb-12">Future Roadmap</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              'Launch KeloPay Merchant Dashboard',
              'Integrate cross-chain swaps',
              'Support for stablecoins and CBDCs',
              'Introduce virtual crypto debit cards',
              'Mobile app (iOS/Android)',
            ].map((item, index) => (
              <div key={index} className="flex items-start">
                <svg className="w-6 h-6 mr-3 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <p className="text-indigo-100">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </main>
    </div>
  )
}




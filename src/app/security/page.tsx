'use client'

import { Navigation } from '@/components/Navigation'

const securityFeatures = [
  {
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
      </svg>
    ),
    title: 'Encrypted API Communications',
    description: 'All API communications are secured with HTTPS encryption, ensuring your data is protected during transmission.',
    color: 'blue',
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
    title: 'Smart Contract-Based Fund Custody',
    description: 'Your funds are secured by audited smart contracts, ensuring transparency and immutability of all transactions.',
    color: 'green',
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H5a2 2 0 00-2 2v9a2 2 0 002 2h14a2 2 0 002-2V8a2 2 0 00-2-2h-5m-4 0V5a2 2 0 114 0v1m-4 0a2 2 0 104 0m-5 8a2 2 0 100-4 2 2 0 000 4zm0 0c1.306 0 2.417.835 2.83 2M9 14a3.001 3.001 0 00-2.83 2M15 11h3m-3 4h2" />
      </svg>
    ),
    title: 'Identity Verification (KYC/AML)',
    description: 'Comprehensive Know Your Customer and Anti-Money Laundering verification processes to ensure platform security and regulatory compliance.',
    color: 'purple',
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
      </svg>
    ),
    title: '2FA Support',
    description: 'Two-factor authentication for both users and merchants, adding an extra layer of security to your account.',
    color: 'red',
  },
]

const bestPractices = [
  'Never share your private keys or seed phrases with anyone',
  'Always verify the recipient address before sending transactions',
  'Use hardware wallets for large amounts',
  'Enable 2FA on your account',
  'Keep your wallet software updated',
  'Be cautious of phishing attempts',
]

export default function SecurityPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-900 dark:to-gray-800">
      <Navigation />
      
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Security & Compliance
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Your security is our top priority. DigitPay employs industry-leading security measures 
            to protect your funds and personal information.
          </p>
        </div>

        {/* Security Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {securityFeatures.map((feature, index) => {
            const colorClasses = {
              blue: 'bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-blue-400',
              green: 'bg-green-100 dark:bg-green-900 text-green-600 dark:text-green-400',
              purple: 'bg-purple-100 dark:bg-purple-900 text-purple-600 dark:text-purple-400',
              red: 'bg-red-100 dark:bg-red-900 text-red-600 dark:text-red-400',
            }[feature.color] || 'bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-blue-400'
            
            return (
              <div
                key={index}
                className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 p-8"
              >
                <div className={`w-16 h-16 ${colorClasses} rounded-xl flex items-center justify-center mb-6`}>
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                  {feature.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            )
          })}
        </div>

        {/* Security Architecture */}
        <div className="mb-16">
          <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-8 lg:p-12">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white text-center mb-12">
              Our Security Architecture
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-20 h-20 bg-blue-100 dark:bg-blue-900 rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="text-3xl font-bold text-blue-600 dark:text-blue-400">1</span>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">Data Encryption</h3>
                <p className="text-gray-600 dark:text-gray-400">
                  All sensitive data is encrypted at rest and in transit using AES-256 encryption standards.
                </p>
              </div>

              <div className="text-center">
                <div className="w-20 h-20 bg-green-100 dark:bg-green-900 rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="text-3xl font-bold text-green-600 dark:text-green-400">2</span>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">Smart Contract Audits</h3>
                <p className="text-gray-600 dark:text-gray-400">
                  All smart contracts undergo rigorous security audits by leading blockchain security firms.
                </p>
              </div>

              <div className="text-center">
                <div className="w-20 h-20 bg-purple-100 dark:bg-purple-900 rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="text-3xl font-bold text-purple-600 dark:text-purple-400">3</span>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">Regulatory Compliance</h3>
                <p className="text-gray-600 dark:text-gray-400">
                  We comply with all applicable financial regulations including KYC, AML, and data protection laws.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Best Practices */}
        <div className="mb-16">
          <div className="bg-gradient-to-r from-blue-600 to-indigo-600 rounded-2xl shadow-xl p-8 lg:p-12 text-white">
            <h2 className="text-3xl font-bold text-center mb-12">Security Best Practices</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
              {bestPractices.map((practice, index) => (
                <div key={index} className="flex items-start">
                  <svg className="w-6 h-6 mr-4 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <p className="text-blue-100">{practice}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Compliance Info */}
        <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-8 lg:p-12">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white text-center mb-8">
            Compliance & Regulations
          </h2>
          <div className="max-w-3xl mx-auto space-y-6">
            <div className="border-l-4 border-blue-600 pl-6">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">KYC (Know Your Customer)</h3>
              <p className="text-gray-600 dark:text-gray-400">
                All users must complete identity verification to use our platform. This helps prevent fraud and ensures regulatory compliance.
              </p>
            </div>
            <div className="border-l-4 border-green-600 pl-6">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">AML (Anti-Money Laundering)</h3>
              <p className="text-gray-600 dark:text-gray-400">
                We implement comprehensive AML procedures to detect and prevent money laundering activities, keeping our platform safe for all users.
              </p>
            </div>
            <div className="border-l-4 border-purple-600 pl-6">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">Data Protection</h3>
              <p className="text-gray-600 dark:text-gray-400">
                We adhere to GDPR and other data protection regulations, ensuring your personal information is handled with the utmost care and security.
              </p>
            </div>
          </div>
        </div>

        {/* Report Security Issue */}
        <div className="mt-16 text-center">
          <div className="bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-xl p-8 max-w-2xl mx-auto">
            <h3 className="text-xl font-bold text-red-900 dark:text-red-400 mb-4">
              Report a Security Issue
            </h3>
            <p className="text-red-700 dark:text-red-300 mb-6">
              If you discover a security vulnerability, please report it responsibly to our security team.
            </p>
            <a
              href="mailto:security@bandwidthlabs.io"
              className="inline-block bg-red-600 hover:bg-red-700 text-white font-semibold py-3 px-6 rounded-xl transition-colors"
            >
              security@bandwidthlabs.io
            </a>
          </div>
        </div>
      </main>
    </div>
  )
}


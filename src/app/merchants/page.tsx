'use client'

import { useState, useMemo } from 'react'
import { Navigation } from '@/components/Navigation'
import { Footer } from '@/components/Footer'

const merchants = [
  {
    id: 1,
    name: 'TechStore Global',
    category: 'Electronics',
    logo: '🔌',
    description: 'Leading electronics retailer with global shipping',
    rating: 4.8,
  },
  {
    id: 2,
    name: 'FashionHub',
    category: 'Fashion & Apparel',
    logo: '👗',
    description: 'Premium fashion and lifestyle products',
    rating: 4.9,
  },
  {
    id: 3,
    name: 'FoodieExpress',
    category: 'Food & Delivery',
    logo: '🍕',
    description: 'Fast food delivery with crypto payments',
    rating: 4.7,
  },
  {
    id: 4,
    name: 'TravelWise',
    category: 'Travel & Tourism',
    logo: '✈️',
    description: 'Book flights and hotels with cryptocurrency',
    rating: 4.6,
  },
  {
    id: 5,
    name: 'GamingWorld',
    category: 'Gaming',
    logo: '🎮',
    description: 'Gaming consoles, accessories, and digital games',
    rating: 4.9,
  },
  {
    id: 6,
    name: 'HealthCare Plus',
    category: 'Healthcare',
    logo: '💊',
    description: 'Pharmacy and health products online',
    rating: 4.8,
  },
]

export default function MerchantsPage() {
  const [searchQuery, setSearchQuery] = useState('')
  const [selectedCategory, setSelectedCategory] = useState('')

  const filteredMerchants = useMemo(() => {
    return merchants.filter((merchant) => {
      const matchesSearch = merchant.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                           merchant.description.toLowerCase().includes(searchQuery.toLowerCase())
      const matchesCategory = !selectedCategory || 
                             merchant.category.toLowerCase().includes(selectedCategory.toLowerCase())
      return matchesSearch && matchesCategory
    })
  }, [searchQuery, selectedCategory])

  const categories = useMemo(() => {
    return Array.from(new Set(merchants.map(m => m.category)))
  }, [])

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-900 dark:to-gray-800">
      <Navigation />
      
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Merchant Payments
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Pay for goods and services directly with your cryptocurrency. Browse our partner merchants 
            and use your crypto balance to make instant payments anywhere in the world.
          </p>
        </div>

        {/* Search and Filter */}
        <div className="max-w-4xl mx-auto mb-12">
          <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-6">
            <div className="flex flex-col md:flex-row gap-4">
              <div className="flex-1 relative">
                <svg
                  className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
                <input
                  type="text"
                  placeholder="Search merchants..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 border border-gray-300 dark:border-gray-600 rounded-xl bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-xl bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              >
                <option value="">All Categories</option>
                {categories.map((category) => (
                  <option key={category} value={category.toLowerCase()}>
                    {category}
                  </option>
                ))}
              </select>
            </div>
            {(searchQuery || selectedCategory) && (
              <div className="mt-4 flex items-center gap-2">
                <button
                  onClick={() => {
                    setSearchQuery('')
                    setSelectedCategory('')
                  }}
                  className="text-sm text-blue-600 dark:text-blue-400 hover:underline"
                >
                  Clear filters
                </button>
                <span className="text-sm text-gray-600 dark:text-gray-400">
                  ({filteredMerchants.length} {filteredMerchants.length === 1 ? 'merchant' : 'merchants'})
                </span>
              </div>
            )}
          </div>
        </div>

        {/* Merchants Grid */}
        {filteredMerchants.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {filteredMerchants.map((merchant) => (
            <div
              key={merchant.id}
              className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden group cursor-pointer"
            >
              <div className="p-6">
                <div className="flex items-start justify-between mb-4">
                  <div className="text-5xl">{merchant.logo}</div>
                  <div className="flex items-center bg-yellow-100 dark:bg-yellow-900/30 px-2 py-1 rounded-lg">
                    <svg className="w-4 h-4 text-yellow-500 mr-1" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                    <span className="text-sm font-semibold text-yellow-700 dark:text-yellow-400">{merchant.rating}</span>
                  </div>
                </div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                  {merchant.name}
                </h3>
                <p className="text-sm text-blue-600 dark:text-blue-400 font-medium mb-2">{merchant.category}</p>
                <p className="text-gray-600 dark:text-gray-400 text-sm mb-4">{merchant.description}</p>
                <button className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white font-semibold py-3 px-4 rounded-xl transition-all duration-200 transform hover:scale-105 active:scale-95 flex items-center justify-center">
                  <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  Pay with Crypto
                </button>
              </div>
            </div>
          ))}
          </div>
        ) : (
          <div className="text-center py-12 mb-12">
            <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-8 max-w-md mx-auto">
              <svg className="w-16 h-16 text-gray-400 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                No merchants found
              </h3>
              <p className="text-gray-600 dark:text-gray-400 mb-4">
                Try adjusting your search or filter criteria
              </p>
              <button
                onClick={() => {
                  setSearchQuery('')
                  setSelectedCategory('')
                }}
                className="text-blue-600 dark:text-blue-400 hover:underline"
              >
                Clear all filters
              </button>
            </div>
          </div>
        )}

        {/* How It Works */}
        <div className="max-w-5xl mx-auto mb-12">
          <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-8 lg:p-12">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white text-center mb-12">
              How Merchant Payments Work
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-blue-100 dark:bg-blue-900 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-blue-600 dark:text-blue-400">1</span>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">Select Merchant</h3>
                <p className="text-gray-600 dark:text-gray-400">
                  Browse and choose from our verified partner merchants
                </p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-green-100 dark:bg-green-900 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-green-600 dark:text-green-400">2</span>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">Pay with Crypto</h3>
                <p className="text-gray-600 dark:text-gray-400">
                  Use your crypto balance to pay - conversion happens automatically
                </p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-purple-100 dark:bg-purple-900 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-purple-600 dark:text-purple-400">3</span>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">Instant Settlement</h3>
                <p className="text-gray-600 dark:text-gray-400">
                  Merchant receives fiat instantly - your order is confirmed
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Become a Merchant CTA */}
        <div className="max-w-4xl mx-auto">
          <div className="bg-gradient-to-r from-blue-600 to-indigo-600 rounded-2xl shadow-xl p-8 lg:p-12 text-center">
            <h2 className="text-3xl font-bold text-white mb-4">Become a Partner Merchant</h2>
            <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
              Accept cryptocurrency payments from customers worldwide. Join our network of merchants 
              and expand your business reach.
            </p>
            <button className="bg-white text-blue-600 font-semibold py-3 px-8 rounded-xl hover:bg-gray-100 transition-all duration-200 shadow-lg transform hover:scale-105 active:scale-95 inline-flex items-center">
              Apply Now
              <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </button>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}





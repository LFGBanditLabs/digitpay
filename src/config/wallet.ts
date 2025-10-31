import { createAppKit } from '@reown/appkit/react'
import { WagmiAdapter } from '@reown/appkit-adapter-wagmi'
import { mainnet, arbitrum, polygon, base, optimism } from '@reown/appkit/networks'

// 1. Get projectId from https://cloud.reown.com
export const projectId = process.env.NEXT_PUBLIC_REOWN_PROJECT_ID || '982f175981feaa4270a11ee31a1231d6'

if (!projectId) {
  throw new Error('Project ID is not defined')
}

// 2. Set up Wagmi adapter
export const wagmiAdapter = new WagmiAdapter({
  networks: [mainnet, arbitrum, polygon, base, optimism],
  projectId,
  ssr: true
})

// 3. Configure the metadata
const metadata = {
  name: 'Digitpay',
  description: 'Digitpay - Digital Payment Platform',
  url: 'https://digitpay.app', // origin must match your domain & subdomain
  icons: ['https://avatars.githubusercontent.com/u/179229932']
}

// 4. Create the AppKit instance
export const appKit = createAppKit({
  adapters: [wagmiAdapter],
  networks: [mainnet, arbitrum, polygon, base, optimism],
  metadata,
  projectId,
  features: {
    analytics: true, // Optional - defaults to your Cloud configuration
    email: true, // default to true
    socials: ['google', 'x', 'github', 'discord', 'apple'],
    emailShowWallets: true // default to true
  }
})

export const config = wagmiAdapter.wagmiConfig

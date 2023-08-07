'use client'
import { createConfig, configureChains, mainnet, sepolia, } from 'wagmi'
import { publicProvider } from 'wagmi/providers/public'
import { MetaMaskConnector } from 'wagmi/connectors/metaMask'
import { goerli, polygon, polygonMumbai } from 'wagmi/chains'
import { infuraProvider } from 'wagmi/providers/infura'


const { chains, publicClient, webSocketPublicClient } = configureChains(
  [mainnet, goerli, sepolia, polygon, polygonMumbai,],
  [infuraProvider({
    apiKey: '2dbf3fc9f6144f9f9b01f5dc31249329',
  }), publicProvider()],

)

export const config = createConfig({
  autoConnect: true,
  connectors: [
    new MetaMaskConnector({ chains }),
  ],
  publicClient,
  webSocketPublicClient,
})


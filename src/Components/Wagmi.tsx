'use client'
import {  createConfig, configureChains, mainnet, sepolia } from 'wagmi'
import { publicProvider } from 'wagmi/providers/public'
import { MetaMaskConnector } from 'wagmi/connectors/metaMask'
import { goerli } from 'wagmi/chains'


const { chains, publicClient, webSocketPublicClient } = configureChains(
  [mainnet,goerli,sepolia],
  [ publicProvider()],

)

export const config = createConfig({
  autoConnect: true,
  connectors: [
    new MetaMaskConnector({ chains }),
  ],
  publicClient,
  webSocketPublicClient,
})


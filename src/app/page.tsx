import dynamic from 'next/dynamic'
import { WagmiConfig } from "wagmi"
import { config } from '../Components/Wagmi'



const Wallet = dynamic(() => import('@/Components/Wallet'), { ssr: false })
const Transfer = dynamic(() => import('@/Components/Transfer'), { ssr: false })
const Contract = dynamic(() => import('@/Components/Contract'), { ssr: false })


export default function Home() {
  return (
    <WagmiConfig config={config}>
      <main className="flex min-h-screen flex-col items-center justify-between p-20 bg-red-400">
        <Wallet />
        <Transfer />
        <Contract />
      </main>
    </WagmiConfig>
  )
}

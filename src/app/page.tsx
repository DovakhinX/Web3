import dynamic from 'next/dynamic'
import { WagmiConfig } from "wagmi"
import { config } from '../components/Wagmi'


const Wallet = dynamic(() => import('../components/Wallet'), { ssr: false })
const Transfer = dynamic(() => import('../components/Transfer'), { ssr: false })


export default function Home() {
  return (
    <WagmiConfig config={config}>
      <main className="flex min-h-screen flex-col items-center justify-between p-20 bg-red-400">
        {Wallet?<Wallet />:null}
        {Transfer?<Transfer />:null}
      </main>
    </WagmiConfig>
  )
}

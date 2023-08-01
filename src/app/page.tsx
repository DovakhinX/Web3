
import Wallet from "@/Components/Wallet"
import { WagmiConfig } from "wagmi"
import { config } from '././../Components/Wagmi'


export default function Home() {
  return (
    <WagmiConfig config={config}>
      <main className="flex min-h-screen flex-col items-center justify-between p-20 bg-red-400">
        <Wallet />
      </main>
    </WagmiConfig>
  )
}

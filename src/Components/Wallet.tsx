'use client'
import React, { useState } from 'react'
import { useAccount, useConnect, useBalance, useNetwork, useSwitchNetwork } from 'wagmi'

export default function Wallet() {

    const { connect, connectors } = useConnect()
    const { address, isConnected, isDisconnected, status } = useAccount()
    const { data: balance} = useBalance({ address, watch: true })
    const { chain } = useNetwork()
    const { switchNetwork, chains } = useSwitchNetwork()
    const [currentNetwork, setCurrentNetwork] = useState(chain?.id || 1)






    return (
        <div className="flex flex-col items-center mb-5 gap-4 tablet:gap-3">
            <h1 className="text-4xl tablet:text-2xl phone:text-xl ">Wallet Interaction </h1>
<div className='flex flex-row items-center gap-3'>
{connectors.map((connector) => (
                <button className="bg-blue-500 text-white px-4 py-2 rounded-md shadow-xl phone:px-2 "
                    key={connector.id}
                    disabled={isConnected}
                    onClick={() => connect({ connector })}>
                    {connector.name} ({status})
                </button>))}
            <p>{chain?.name}</p>
</div>
            <div className='flex flex-row gap-3'>
                <select className='rounded-md shadow-xl p-2 phone:' onChange={(e) => setCurrentNetwork(Number(e.target.value))   }>
                    {chains?.map((chain) => {
                        return (
                            <option key={chain.id} value={chain.id}>{chain.name}</option>
                        )
                    })}
                </select>
                <button className="bg-blue-500 text-white px-4 py-2 rounded-md shadow-xl phone:px-2 "
                    onClick={() => switchNetwork?.(currentNetwork)}
                >Switch Network</button>
            </div>
            {isConnected ? (
                <div className="flex flex-col items-start gap-3  border-2 border-lime-200 w-max h-max rounded-md shadow-xl p-4 bg-lime-200 phone:p-2 ">
                    <p className="text-xl tablet:text-lg phone:text-[11px]  ">Account: {address}</p>
                    <p className="text-xl tablet:text-lg phone:text-[12px]  "> Balance: {balance ? `${balance.formatted} ${balance.symbol}` : `0`}</p>
                </div>
            ) : isDisconnected ? (
                <div className="flex flex-col items-center justify-center  border-2 border-lime-200 w-max h-[200px] rounded-md shadow-xl p-4  bg-slate-500  ">
                    <p className="text-2xl phone:text-lg "> Please connect your wallet</p>
                </div>
            ) : (null)
            }
        </div>
    )
}
'use client'
import React from 'react'
import { useAccount, useConnect, useBalance } from 'wagmi'

export default function Wallet() {

    const { connect, connectors } = useConnect()
    const { address, isConnected } = useAccount()
    const { data: balance } = useBalance({ address })

    return (
        <div className="flex flex-col items-center gap-4">
            <h1 className="text-4xl ">Wallet Interaction </h1>
            {connectors.map((connector) => (
                <button className="bg-blue-500 text-white px-4 py-2 rounded-md shadow-xl"
                    key={connector.id}
                    onClick={() => connect({ connector })}>
                    {connector.name}
                </button>))}
            {isConnected ? (
                <div className="flex flex-col items-start gap-4  border-2 border-lime-200 w-[650px] h-[200px] rounded-md shadow-xl p-4 bg-lime-200 ">
                    <p className="text-xl ">Account: {address}</p>
                    <p className="text-xl "> Balance: {balance ? `${balance.value}` : `0`}</p>
                </div>
            ) : (<div className="flex flex-col items-center justify-center  border-2 border-lime-200 w-[400px] h-[200px] rounded-md shadow-xl p-4  bg-slate-500  ">
                <p className="text-2xl ">Please connect your wallet</p>
            </div>)
            }
        </div>
    )
}
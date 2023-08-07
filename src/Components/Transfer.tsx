'use client'
import React from 'react'
import { parseEther } from 'viem'
import { useAccount, useSendTransaction, usePrepareSendTransaction, } from 'wagmi'

interface Data {
    address: string,
    value: string
}

export default function Transfer() {
    const [txnData, setTxnData] = React.useState<Data>({
        address: '',
        value: ''
    })
    const { isConnected } = useAccount()
    const { config } = usePrepareSendTransaction({
        to: txnData.address,
        value: parseEther(txnData.value),
    })
    const { isLoading, isSuccess, sendTransactionAsync } =
        useSendTransaction(config)

    return (isConnected ? (
        <>
            <h3 className='text-4xl tablet:text-2xl phone:text-x mb-2 '>Transfer tokens</h3>
            <div className="h-max w-max bg-orange-300 p-4 rounded-md shadow-xl flex-row flex items-center gap-8 phone:gap-6 phone:flex-col">
                <div>
                    <p>Send to :</p>
                    <input onChange={(e) => setTxnData({ ...txnData, address: e.target.value })} value={txnData.address} />
                    <p>Amount :</p>
                    <input onChange={(e) => setTxnData({ ...txnData, value: (e.target.value) })} value={txnData.value} type='number'/>
                </div>
                <button className="bg-blue-500 text-white px-4 py-2 rounded-md shadow-xl phone:px-6"
                    onClick={() => {
                        sendTransactionAsync?.().then(()=>setTxnData({ ...txnData, address: '', value: '' }))

                    }}>Send</button>
            </div>
            {isLoading ? (<p>Loading...</p>) : (null)}
            {isSuccess ? (<p>Transfer successful!!</p>) : (null)}
        </>) : (null)






    )




}
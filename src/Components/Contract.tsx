'use client'

import React from 'react'
import { useContractRead } from 'wagmi';
import dat from '../../artifacts/contracts/test.sol/Test.json'

export default function Contract() {








    const { data, isError, isLoading, refetch, error } = useContractRead({
        address: '0xCc10cFBFdD08ae6f991bDBa81A63B8b0d2000244',
        abi: dat.abi,
        functionName: 'sayHello',

    })



    return (

        <div>
            {isLoading ? <p>Loading...</p> : null}
            {isError ? <p>{error?.toString()}</p> : null}

            {data ? <p>Data received:{data.toString()}</p> : null}
            <button onClick={() => refetch}>Refetch</button>
        </div>








    )
}
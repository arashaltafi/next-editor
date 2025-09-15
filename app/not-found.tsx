"use client"

import LottieComponent from '@/components/LottieComponent'
import Address from '@/utils/Address'
import React from 'react'

const NotFoud = () => {
    return (
        <div className='w-full min-h-screen flex flex-col gap-16 items-center justify-center'>
            <LottieComponent
                src={Address.lotties.notFound}
                className='size-56 bg-gray-400 rounded-xl'
            />

            <h1>Page Not Found</h1>
        </div>
    )
}

export default NotFoud
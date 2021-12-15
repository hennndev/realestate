import React from 'react'
import { useRouter } from 'next/router'

const NotFound = () => {

    const router = useRouter()

    const handleBack = () => {
        router.push('/properties', undefined, {shallow: true})
    }

    return (
        <div className='flex items-center justify-center flex-col space-y-5'>
            <h1 className='font-medium text-xl text-center'>Oops Sorry, Cannot Find  Real Estate What You Want</h1>
            <button className='btn' onClick={handleBack}>Get Back</button>
        </div>
    )
}

export default NotFound

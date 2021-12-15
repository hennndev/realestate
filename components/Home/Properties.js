import React from 'react'
import Image from 'next/image'
import Feature from '../UI/Feature'
import { useRouter } from 'next/router'

const Properties = ({data, title}) => {

    const router = useRouter()

    return (
        <div className="mt-20 text-gray-900">
            {/* TITLE */}
            <div className="grid place-items-center">
                <h1 className="text-2xl md:text-3xl font-semibold mb-10 border-b-4 border-[#F78812] w-max pb-3">Properties {title}</h1>
            </div>
            {/* DESCRIPTION */}
            <div className="flex overflow-x-auto scrollbar-hide space-x-5 px-2 py-5">
                {data.map(property => (
                    <div className="cursor-pointer bg-white shadow-lg rounded" key={property.id} onClick={() => router.push(`/properties/${property.externalID}`)}>
                        <div className="relative w-[300px] h-[330px] rounded-md">
                            <Image src={property.coverPhoto.url} alt={property.title} layout="fill" objectFit="cover" className="rounded-t-md"/>
                        </div>

                        <div className="flex flex-col space-y-2 px-3 py-5">
                            <h1 className="text-[17px]">{property.title}</h1>
                            <h1 className="font-medium">
                                AED <span className="text-xl">{property.price.toLocaleString()}</span> {' '} 
                                <span className="text-sm text-gray-500">
                                    {title === 'For Rent' ? property.rentFrequency === 'monthly' ? '/ Month' : '/ Year' : ''}
                                </span>
                            </h1>
                            <Feature data={property}/>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Properties

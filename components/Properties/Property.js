import React from 'react'
import Image from 'next/image'
import Feature from '../UI/Feature'
import { useRouter } from 'next/router'

const Property = ({property}) => {

    const router = useRouter()

    const classesBtn = "py-2 px-4 text-sm lg:text-base"

    return (
        <div className="flex flex-col md:flex-row min-h-[250px] shadow-md rounded-md overflow-hidden cursor-pointer">
            <div className="relative w-full md:w-[350px] min-h-[250px]">
                <Image 
                    src={property.coverPhoto.url} 
                    layout="fill" 
                    objectFit="cover" 
                    className="rounded-l-md"
                    alt={property.title}/>
            </div>
            
            <div className="bg-white flex-1 py-5 md:py-3 px-4 text-gray-800">
                <div className="flex items-center justify-between">
                    <h1>
                        AED {' '}
                        <span className="text-2xl font-semibold">{property.price.toLocaleString()}</span>
                        {property.rentFrequency && (
                            <span className="text-sm text-gray-600"> / {property.rentFrequency === 'monthly' ? 'Month' : 'Year'}</span>
                        )}
                    </h1>
                    <div className="relative h-12 w-12">
                        <Image 
                            src={property?.agency?.logo?.url ? property.agency.logo.url : "/images/next.png"} 
                            layout="fill" 
                            objectFit="contain" 
                            alt={property?.agency?.name ? property.agency.name : 'agency'}/>
                    </div>
                </div>
                <div className="flex items-center mt-2 space-x-3 text-gray-500">
                    <p className="text-yellow-600">{property.purpose === 'for-rent' ? 'For Rent' : 'For Sale'}</p>
                    <span>|</span>
                    <p>{property.category[1].name}</p>
                </div>
                <h1 className="mt-2 text-lg font-medium mb-5">{property.title}</h1>
                <Feature data={property}/>

                {/* BUTTON GROU[] */}
                <div className="flex space-x-2 mt-5">
                    <button className={`btn ${classesBtn}`}>
                        Call Agency
                    </button>
                    <button className={`btn bg-blue-500 hover:bg-blue-600 ${classesBtn}`}>Send Email</button>
                    <button className={`btn bg-gray-500 hover:bg-gray-600 ${classesBtn}`} onClick={() => router.push(`/properties/${property.externalID}`)}>Detail</button>   
                </div>
            </div>
        </div>
    )
}

export default Property

import React, { useState } from 'react'
import Feature from '../UI/Feature'
import PropertyGallery from './PropertyGallery'
import { GoChevronDown, GoChevronUp } from 'react-icons/go' 

const PropertyDescription = ({data, setIsModal}) => {

    const [readMore, setReadMore] = useState(false)

    return (
        <div className="text-gray-900 flex-1 flex flex-col mt-5 space-y-4 bg-white py-5 px-4 shadow-md rounded">
            <h1 className="text-yellow-600 font-medium text-xl">
                {data.purpose === 'for-sale' ? 'For Sale !' : 'For Rent !'}
            </h1>
            <h1>
                AED
                <span className="text-2xl md:text-3xl font-semibold text-green-600">
                    {'  '}{data.price.toLocaleString()}
                </span>
                <span className="text-gray-600">
                    {data.rentFrequency === 'monthly' ? ' / month' : !data.rentFrequency ? '' : ' / year'}
                </span>
            </h1>
            <h1 className="text-xl md:text-2xl font-medium">{data.title}</h1>
            <div className="flex items-center flex-wrap">
                {data.location.map((item, idx) => (
                    <p key={item.id} className="whitespace-nowrap mr-2">
                        {item.name}{idx + 1 !== data.location.length && ','}   
                    </p>
                ))}
            </div>   
            <Feature data={data}/>
            <p className="text-gray-800">{data.description}</p>
            <div className={`flex flex-col ${readMore && 'flex-col-reverse'}`}>
                <h1 className="flex items-center text-green-600 text-xl cursor-pointer w-max" onClick={() => setReadMore(!readMore)}>
                    {readMore ? 'Read less' : 'Read more'}
                    {readMore ? <GoChevronUp className="text-xl ml-2 mt-1"/> : <GoChevronDown className="text-xl ml-2 mt-1"/>}
                </h1>
                <div className={`${readMore ? 'inline mb-5' : 'hidden'} flex flex-col space-y-3 text-gray-800`}>
                    <p>- Price AED {data.price.toLocaleString()}</p>
                    <p>- Type {data.category[1].name}</p>
                    <p>- {data.baths} bathsroom</p>
                    <p>- {data.rooms === 0 ? '' : data.rooms} {data.rooms === 0 ? 'Studio' : 'Beds'}</p>
                    <p>- Area {parseFloat(data.area).toFixed(2)} sqft</p>
                    <p>- Property {data.furnishingStatus === null ? 'Unfurnished' : 'Furnished'}</p>
                </div>
            </div>
            <PropertyGallery data={data} setIsModal={setIsModal}/>
        </div>   
    )
}

export default PropertyDescription

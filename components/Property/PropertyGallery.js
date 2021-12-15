import React from 'react'
import Image from 'next/image'

const PropertyGallery = ({data, setIsModal}) => {

    return (
        <div className="flex overflow-x-auto space-x-5 scrollbar-hide">
            {data.photos.slice(0, 10).map((photo, idx) => (
                <div key={photo.id}>
                    <div className="relative w-[280px] h-[200px] cursor-pointer" onClick={() => setIsModal(idx + 1)}>
                        <Image 
                            src={photo.url} 
                            layout="fill" 
                            objectFit="cover" 
                            alt={photo.id} 
                            className="rounded"/>
                    </div>
                </div>
            ))}
        </div>
    )
}

export default PropertyGallery

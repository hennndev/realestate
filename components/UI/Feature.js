import React from 'react'
import { FaBed, FaBath } from 'react-icons/fa'
import { MdOutlinePhotoSizeSelectSmall } from 'react-icons/md'

const Feature = ({data}) => {

    const classes = "flex items-center space-x-2 border-l-2 border-gray-300 pl-5"

    return (
        <div className="flex items-center text-gray-600 space-x-3">
            <div className="flex items-center space-x-2">
                <FaBed/>
                <p>{data.rooms === 0 ? 'Studio' : data.rooms}</p>
            </div>
            <div className={classes}>
                <FaBath/>
                <p>{data.baths}</p>
            </div>
            <div className={classes}>
                <MdOutlinePhotoSizeSelectSmall/>
                <p>{parseFloat(data.area).toFixed(2)} sqft</p>
            </div>
        </div>
    )
}

export default Feature

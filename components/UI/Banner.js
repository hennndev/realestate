import React from 'react'
import FilteredProperties from '../Home/FilteredProperties'

const Banner = ({handleModal}) => {
    return (
        <div className="bg-banner bg-cover bg-center h-[550px] w-full pt-20 px-5">
            <div className="container flex text-center sm:text-left">   
                <div className="bg-gray-800 w-[500px] min-h-60 py-10 px-5 rounded-lg text-white">
                    <h1 className="text-3xl md:text-4xl leading-[1.3] mb-5">
                        Search Properties for Sale and to Rent in the UEA
                    </h1>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam sed varius felis, vel efficitur massa.</p>
                    
                    <FilteredProperties classes="hidden w-[600px] md:flex items-center justify-evenly bg-white mt-5 text-gray-700 overflow-visible py-2 px-5 rounded"/>
                </div>
            </div>
            <button 
                onClick={handleModal}
                className="btn block md:hidden mt-5">
                Find Property
            </button>
        </div>
    )
}

export default Banner

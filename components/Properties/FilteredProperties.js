import React, { useState, useEffect } from 'react'
import useSWR from 'swr'
import { useRouter } from 'next/router'
import InputControl from '../UI/InputControl'
import { fetcher, utilsRoute2, utilsValues } from '../../consts/consts'
import { categories, beds, baths } from '../../consts/consts'

const FilteredProperties = ({isFilter, setPropertiesData, setIsFilter, setIsServer, isServer}) => {

    const router = useRouter()   
    const [values, setValues] = useState({
        purpose: 'default',
        categoryExternalID: 'default',
        priceMax: '',
        roomsMax: 'default',
        bathsMax: 'default',
        furnishingStatus: 'default'
    })
    const [queriesTerm, setQueriesTerm] = useState('')
    const [isClient, setIsClient] = useState(false)
    const handleChange = (e) => {
        const { id, value } = e.target
        setValues({
            ...values,
            [id]: value
        })
    }
    

    useEffect(() => {
        if(router.query) {
           setValues(utilsValues(values, router.query))
        }
    },  [router.query])

    const { data: dataTerm } = useSWR([queriesTerm, isClient], fetcher)
    if(dataTerm && isClient) {
        setPropertiesData(dataTerm)
        setQueriesTerm('')
        setIsServer(true)
        setIsClient(false)
    }

    // SUBMIT FORM
    const handleSubmit  = async (e) => {
        e.preventDefault()

        let queries = utilsRoute2(values)     
        queries = `&${queries.slice(0, -1)}`     
        
        setQueriesTerm(queries.length < 2 ? '' : queries)
        setIsFilter(false)
        setIsClient(true)
        router.push(`/properties${queries.length > 1 ? '?' : ''}${queries.substring(1)}`, undefined, { shallow: true })
    }

    // RESET FORM
    const handleReset = () => {
        setValues(utilsValues(values,'_', 'reset'))
    }


    return (
        <form className={`${isFilter ? 'flex' : 'hidden'} md:flex flex-col bg-white p-3 mb-10 shadow-md rounded`} onSubmit={handleSubmit}>

            <div className="flex flex-col md:flex-row lg:flex-col">       
                <div className="flex flex-col flex-1 space-y-3 lg:flex-row lg:space-x-3 lg:space-y-0">        
                    {/* FURNISH */}
                    <InputControl value={values.furnishingStatus} handleChange={handleChange} id="furnishingStatus" title="Furnish Type:">
                        <option value="default">Default</option>
                        <option value="furnished">Furnished</option>
                        <option value="unfurnished">Unfurnished</option>
                    </InputControl>

                    {/* PROPRTY TYPE */}
                    <InputControl value={values.categoryExternalID} handleChange={handleChange} id="categoryExternalID" title="Property Type:">
                        {categories.map(cty => (
                            <option value={cty.value} key={cty.value}>{cty.name}</option>
                        ))}
                    </InputControl>
                    
                    {/* MAX PRICE */}
                    <div className="inputControl">
                        <label htmlFor="priceMax">Max Price:</label>
                        <input 
                            id="priceMax"
                            type="number" 
                            min={1}
                            placeholder="Max Price..." 
                            className={`select-input ${values.priceMax !== '' && 'bg-yellow-200'}`}
                            value={values.priceMax}
                            onChange={handleChange}/>
                    </div>
                </div>

                <div className="flex flex-col flex-1 space-y-3 lg:flex-row lg:space-x-3 lg:space-y-0 mt-5 md:ml-5 lg:ml-0 md:mt-0 lg:mt-5">
                    {/* PURPOSE */}
                    <InputControl value={values.purpose} handleChange={handleChange} id="purpose" title="Purpose:">
                        <option value="default">Default</option>
                        <option value="for-rent">For Rent</option>
                        <option value="for-sale">For Sale</option>
                    </InputControl>
                    
                    {/* MAX BEDS */}
                    <InputControl value={values.roomsMax} handleChange={handleChange} id="roomsMax" title="Max Beds:">
                        {beds.map(bed => (
                            <option value={bed} key={bed}>
                                {bed === 'default' ? 'Default' : bed === 0 ? 'Studio' : bed}
                            </option>
                        ))}
                    </InputControl>

                    {/* MAX BATHS */}
                    <InputControl value={values.bathsMax} handleChange={handleChange} id="bathsMax" title="Max Baths:">
                        {baths.map(bath => (
                            <option value={bath} key={bath}>
                                {bath === 'default' ? 'Default' : bath}
                            </option>
                        ))}
                    </InputControl>
                </div>
            </div>

            <div className="flex items-center w-full space-x-3">
                <button type="submit" className="btn mt-5 py-[10px] px-5 bg-yellow-400 hover:bg-yellow-500 flex-1">Find Properties</button>
                <button type="button" onClick={handleReset} className="btn mt-5 py-[10px] px-5 bg-red-400 hover:bg-red-500 flex-1">Reset</button>
            </div>
        </form>
    )
}

export default FilteredProperties

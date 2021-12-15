import React, { useState } from 'react'
import { useRouter } from 'next/router'
import { categories, utilsRoute2 } from '../../consts/consts'

const FilteredProperties = ({classes, classesInput, filteredModal, handleClose}) => {

    const [values, setValues] = useState({
        purpose: '',
        categoryExternalID: '',
        priceMax: ''
    })
    const handleChange = (e) => {
        const { id, value } = e.target
        setValues({
            ...values,
            [id]: value
        })
    }
    const router = useRouter()

    const handleSubmit = (e) => {
        e.preventDefault()

        let queries = utilsRoute2(values)
       
        queries = `${queries.length > 1 ? '?' : ''}${queries.slice(0, -1)}`      
        router.push(`/properties${queries}`)
    }

    const inputControl = "mb-3 md:mb-0 flex flex-col"


    return (
        <form className={classes} onSubmit={handleSubmit}>
            {/* PURPOSE */}
            <div className={inputControl}>
                <label htmlFor="purpose" className='labelForm md:mb-0 md:pl-3'>Purpose</label>     
                <select 
                    id="purpose" 
                    className={`appearance-none outline-none py-2 px-3 pr-5 ${classesInput}`} 
                    value={values.purpose} 
                    onChange={handleChange}>
                    <option value="">Choose Purpose...</option>
                    <option value="default">Default</option>
                    <option value="for-sale">For Sale</option>
                    <option value="for-rent">For Rent</option>
                </select>
            </div>
            {/* PROPERTY TYPE */}
            <div className={inputControl}>
                <label htmlFor="categoryExternalID" className='labelForm md:mb-0 md:pl-3'>Property Type</label>  
                <select 
                    id="categoryExternalID" 
                    className={`appearance-none outline-none py-2 px-3 pr-5 ${classesInput}`} 
                    value={values.categoryExternalID} 
                    onChange={handleChange}>
                    <option value="">Choose Category...</option>
                    {categories.map(cty => (
                        <option value={cty.value} key={cty.value}>{cty.name}</option>
                    ))}
                </select>
            </div>
            {/* MAX PRICE */}
            <div className={inputControl}>
                <label htmlFor="priceMax" className='labelForm md:mb-0 md:pl-3'>Max Price</label>
                <input 
                    type="number" 
                    id="priceMax" 
                    placeholder="Max Price" 
                    className={`outline-none py-2 px-3 w-full md:w-44 ${classesInput}`}
                    min={1}
                    value={values.priceMax}
                    onChange={handleChange}/>
            </div>
            <div className={`flex items-center ${filteredModal && 'mt-5'}`}>
                <button className={`btn ${filteredModal ? 'py-2' : 'py-4'} px-6`} type="submit">Find</button>
                {filteredModal && 
                    <button 
                        className={`bg-gray-600 hover:bg-gray-700 py-2 px-6 btn ml-5`}
                        onClick={handleClose}>
                        Cancel
                    </button>}
            </div>
        </form>
    )
}

export default FilteredProperties

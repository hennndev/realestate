import React from 'react'

const Footer = () => {
    return (
        <div className="bg-gray-100 w-100 pt-5 pb-10 px-3">
            <div className='container flex flex-col space-y-10 lg md:flex-row md:space-y-0 justify-evenly text-gray-700'>
                <div className='flex items-center flex-col space-y-2'>
                    <h2 className='text-2xl font-medium mb-3 text-gray-900'>Explore</h2>
                    <p className='select-item-footer'>Homepage</p>
                    <p className='select-item-footer'>About</p>
                    <p className='select-item-footer'>Properties</p>
                    <p className='select-item-footer'>Contact</p>
                </div>
                <div className='flex items-center flex-col space-y-2'>
                    <h2 className='text-2xl font-medium mb-3 text-gray-900'>Follow Us</h2>
                    <p className='select-item-footer'>Instagram</p>
                    <p className='select-item-footer'>Facebook</p>
                    <p className='select-item-footer'>Twitter</p>
                </div>
                <div className='flex items-center flex-col space-y-2'>
                    <h2 className='text-2xl font-medium mb-3 text-gray-900'>Support</h2>
                    <p className='select-item-footer'>Contact Us</p>
                    <p className='select-item-footer'>FAQ</p>
                    <p className='select-item-footer'>Services</p>
                    <p className='select-item-footer'>Privacy Policy</p>
                    <p className='select-item-footer'>Terms and COndition</p>
                </div>
            </div>
        </div>
    )
}

export default Footer

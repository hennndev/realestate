import React, { useState } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { GiHamburgerMenu } from 'react-icons/gi'
import { AiOutlineHome, AiOutlineClose, AiOutlineSearch } from 'react-icons/ai'
import { RiContactsBookLine } from 'react-icons/ri'
import { BiBuildingHouse } from 'react-icons/bi'

const Header = () => {

    const [isOpen, setIsOpen] = useState(false)

    const router = useRouter()

    const handleRoute = (url) => {
        setIsOpen(false)

        router.push(url)
    }

    return (
        <div className="bg-transparent py-3 px-5">
            <div className="container flex items-center justify-between relative md:static">
                <h1 className="text-2xl text-gray-600 font-medium">RSTATE</h1>
                
                <nav className="hidden md:flex items-center">
                    <div className="flex items-center space-x-3 text-gray-600 font-medium">
                        <Link href="/">
                            <a className="text-[15px]">Home</a>
                        </Link>
                        <Link href="/properties">
                            <a className="text-[15px]">Properties</a>
                        </Link>
                        <Link href="/">
                            <a className="text-[15px]">Explore</a>
                        </Link>
                        <Link href="/">
                            <a className="text-[15px]">Contacts</a>
                        </Link>
                    </div>
                    <button className="btn py-[5px] px-4 text-sm ml-5">
                        Sign Up
                    </button>
                </nav>
                {isOpen ? <AiOutlineClose onClick={() => setIsOpen(!isOpen)} className="block md:hidden text-lg cursor-pointer"/> : <GiHamburgerMenu onClick={() => setIsOpen(!isOpen)} className="block md:hidden text-lg cursor-pointer"/> }
                

                <div className={`${isOpen ? 'absolute right-0 top-10' : 'hidden'} w-52 bg-white pt-3 flex flex-col md:hidden z-50 rounded-b`}>
                    <div className="flex flex-col">
                        <div 
                            onClick={() => handleRoute('/')}
                            className="flex items-center py-2 pl-3 space-x-3 hover:bg-blue-100 cursor-pointer">
                            <AiOutlineHome className="text-xl"/>
                            <p>Home</p>
                        </div>
                        <div 
                            onClick={() => handleRoute('/properties')}
                            className="flex items-center py-2 pl-3 space-x-3 hover:bg-blue-100 cursor-pointer">
                            <BiBuildingHouse className="text-xl"/>
                            <p>Properties</p>
                        </div>
                        <div 
                            onClick={() => handleRoute('/')}
                            className="flex items-center py-2 pl-3 space-x-3 hover:bg-blue-100 cursor-pointer">
                            <AiOutlineSearch className="text-xl"/>
                            <p>Explore</p>
                        </div>
                        <div 
                            onClick={() => handleRoute('/contacts')}
                            className="flex items-center py-2 pl-3 space-x-3 hover:bg-blue-100 cursor-pointer">
                            <RiContactsBookLine className="text-xl"/>
                            <p>Contacts</p>
                        </div>
                    </div>
                    <button className="btn py-[8px] px-4 text-sm mt-5">
                        Sign Up
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Header

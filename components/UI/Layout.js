import React from 'react'
import Header from './Header'
import Footer from './Footer'

const Layout = ({children}) => {
    return (
        <main className="bg-gradient-to-b from-blue-50 min-h-screen">
            <Header/>
            {children}
            <Footer/>
        </main>
    )
}

export default Layout

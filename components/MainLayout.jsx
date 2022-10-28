import React from 'react'
import Footer from './Footer'
import Navbar from './Navbar'

const MainLayout = ({ children }) => {
    return (
        <div className='MainLayout'>
            <Navbar />
             {children}
            <Footer />
        </div>
    )
}

export default MainLayout
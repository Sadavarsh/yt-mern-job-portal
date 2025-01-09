import Footer from '@/components/common/Footer'
import Navbar from '@/components/common/Navbar'
import React from 'react'
import { Outlet } from 'react-router-dom'

const Layout = () => {
  return (
    <>
    <Navbar />
        <Outlet />
        <Footer />
        <div className='h-[250px]'>
          
        </div>
    </>
  )
}

export default Layout
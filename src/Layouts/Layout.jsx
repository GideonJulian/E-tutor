import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from '../components/Ui/Navbar'
import Footer from '../components/Ui/Footer'

const Layout = () => {
  return (
    <div>
      <div>
        <Navbar />
      </div>
        <Outlet />
        <div>
          <Footer />
        </div>
    </div>
  )
}

export default Layout
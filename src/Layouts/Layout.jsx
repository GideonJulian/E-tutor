import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from '../components/Ui/Navbar'

const Layout = () => {
  return (
    <div>
      <div>
        <Navbar />
      </div>
        <Outlet />
    </div>
  )
}

export default Layout
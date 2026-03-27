import React from 'react'
import Navbar from './Component/Navbar'
import { Outlet } from 'react-router-dom'

const MainOutlet = () => {
  return (
    <div>
      <Navbar/>
      <Outlet/>
    </div>
  )
}

export default MainOutlet

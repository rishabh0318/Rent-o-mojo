import React from 'react'
import Navbar from '../components/Navbar'
import Product from '../components/Product'
import { Outlet } from 'react-router-dom'

const AppLayout = () => {
  return (
        <>
        <Navbar/>
        <Outlet/>
        </>
  )
}

export default AppLayout
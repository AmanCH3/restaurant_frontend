import React from 'react'
import { Outlet } from 'react-router-dom'
import NavBar from './components/navbar'
import Footer from './components/footer'
import { AuthProvider } from './context/AuthContext'

function Layout() {
  return (
    <AuthProvider>
        <NavBar />
        <Outlet />
        <Footer/>
    </AuthProvider>
  )
}

export default Layout
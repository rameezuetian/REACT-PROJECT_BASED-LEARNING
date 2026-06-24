import { useState } from 'react'
import Navbar from './components/Navbar'
import Login from './components/Login'
import Dashboard from './components/Dashboard'
import Logout from './components/Logout'
import './App.css'

function App() {
  

  return (
    <>
    <Navbar />
    <Login />
    <Dashboard />
    <Logout />
    </>
  )
}

export default App

import { useState } from 'react'
import './App.css'
import DataRequest from './components/DataRequest'
import Dashboard from './components/Dashboard'
import { RouterProvider } from 'react-router-dom'
import { router } from './utils/router'

function App() {
  

  return (
    <>
     <RouterProvider router={router} />
    
    </>
  )
}

export default App

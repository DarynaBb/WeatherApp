import React from 'react'
import { Outlet } from 'react-router-dom'

function Root() {
  return (
    <div className='bg-black h-screen overflow-scroll text-white'>
        <Outlet />
    </div>
  )
}

export default Root
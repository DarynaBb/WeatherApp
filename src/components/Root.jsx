import React from 'react'
import { Outlet } from 'react-router-dom'

function Root() {
  return (
    <div className='bg-black text-white'>
        <Outlet />
    </div>
  )
}

export default Root
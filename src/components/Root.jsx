import React from 'react'
import { Outlet } from 'react-router-dom'
import { useContext } from 'react'
import { MenuContext } from '../context/MenuContext'

function Root() {
  const {istDarkMode,value} = useContext(MenuContext);
  return (
    <div className={`${value > 50 ? "bg-black text-white" : "bg-white text-black" }  h-screen overflow-scroll `}>
        <Outlet />
    </div>
  )
}

export default Root
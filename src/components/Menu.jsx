import React from 'react'
import { useState, useContext } from 'react'
import { MenuContext } from '../context/MenuContext';
import menu from "../assets/images/Menu.svg";

function Menu() {
   const { degree, setDegree, setEdit, edit } = useContext(MenuContext);
   const [isMenuOpen, setIsMenuOpen] = useState(false); 

   const onCklickHandler = () => {
    isMenuOpen ? setIsMenuOpen(false) : setIsMenuOpen(true);
   }

   const onCklickHandlerCelcius = () => {
    setDegree("celsius");
   }

   const onCklickHandlerCelciusFahrenheit = () => {
    setDegree("fahrenheit");
   }

   const onCklickHandlerEdit = () => {
    edit ? setEdit(false) : setEdit(true);
   }


  return (

    <div className='text-black'>
        <div className='relative '> 
        <div className='flex justify-end '>
            <button onClick={() => setIsMenuOpen(true)}>
                <img src={menu} alt="" />
            </button>
        </div>    
        <div className={`${isMenuOpen ? "block" : "hidden" } absolute z-20 top-[25px] right-[0px] bg-green py-[12px] pl-[26px] pr-[12px] rounded-[8px]`}>
            <ul>
                <li onClick={onCklickHandlerEdit} className='hover:underline cursor-pointer flex justify-between border-b border-black'>
                    <p>Edit my rainbow</p> 
                    <img src={test} alt="" /> </li>
                <li className={`${degree === "celsius" ? "text-menu-gray border-menu-gray" : "text-black border-black" } flex justify-between border-b  relative`}
                    onClick={onCklickHandlerCelcius}
                >
                    <img src={check} width={12} height={12} className={`${degree === "celsius" ? "opacity-100" : "opacity-0"} absolute -left-[12px] top-[50%] -translate-y-[50%] `}/> 
                    <p className={`${degree === "celsius" ? "menu-gray":"text-black"}`}>Celsius</p>
                    <p className={`${degree === "celsius" ? "menu-gray": "text-text-gray"}`}>°C</p>
                   
                    </li>
                    <li className={`${degree === "fahrenheit" ? "text-menu-gray border-menu-gray" : "text-black border-black" } flex justify-between border-b  relative`}
                    onClick={onCklickHandlerCelciusFahrenheit}
                >
                    <p>Fahrenheit</p>
                    <p className={`${degree === "fahrenheit" ? "block" : "hidden"} hover:underline`}> *</p>
                </li>    
            </ul>
        </div>
        </div>
    </div>  

    
  )
}

export default Menu
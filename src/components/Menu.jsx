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
    <div>
        <div className='flex justify-end relative'>
            <button onClick={onCklickHandler}>
                <img src={menu} alt="" />
            </button>
        </div>    
        <div className={`${isMenuOpen ? "block" : "hidden" } absolute top-[80px] right-[30px] bg-white p-[40px] rounded-[8px]`}>
            <ul>
                <li onClick={onCklickHandlerEdit} className='hover:underline cursor-pointer'>Edit your list</li>
                <li className='hover:underline flex items-center'
                    onClick={onCklickHandlerCelcius}
                >
                    <p>Celsius</p>
                    <p className={`${degree === "celsius" ? "block" : "hidden"} hover:underline`}> *</p></li>
                <li className='hover:underline flex'
                    onClick={onCklickHandlerCelciusFahrenheit}
                >
                    <p>Fahrenheit</p>
                    <p className={`${degree === "fahrenheit" ? "block" : "hidden"} hover:underline`}> *</p>
                </li>
                    
            </ul>
        </div>
    </div>    
    
  )
}

export default Menu
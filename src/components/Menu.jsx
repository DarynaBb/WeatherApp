import React from 'react'
import { useState, useContext } from 'react'
import { MenuContext } from '../context/MenuContext';
import menu from "../assets/images/Menu.svg";
import pencil from "../assets/images/Pencil.svg";
import check from "../assets/images/Check.svg";
import Slider from './Slider';
import { useLocation } from 'react-router-dom';
import mblack from "../assets/images/Menublack.svg";




function Menu() {
   const { degree, setDegree, setEdit, edit, value } = useContext(MenuContext);
   const [isMenuOpen, setIsMenuOpen] = useState(false); 
   const location = useLocation();
   const currentPath = location.pathname;

   const onCklickHandlerCelcius = () => {
    setDegree("celsius");
   }

   const onCklickHandlerCelciusFahrenheit = () => {
    setDegree("fahrenheit");
   }

   const onCklickHandlerEdit = () => {
    setEdit(false);
    setIsMenuOpen(false);
   }


    return (
        <div className='text-black'>
            <div className='relative '> 
                <div className="flex justify-end" >
                    <button className={`${edit ? "hidden" : "block"}`} onClick={() => setIsMenuOpen(true)}>
                        <img className={`${value < 50 ? "block" : "hidden"}`} src={mblack} alt="" />
                        <img className={`${value > 50 ? "block" : "hidden"}`} src={menu} alt="" />
                    </button>
                    <p className={`${edit ? (value > 50 ? "text-white" : "text-black") : "hidden"} text-[12px] cursor-pointer`} onClick={() => onCklickHandlerEdit()}>Done</p>
                </div>    
                <div className={`${isMenuOpen  && !edit ? "block" : "hidden" } absolute min-w-[200px] z-20 top-[25px] right-[0px] bg-green pt-[12px] pb-[5px] pl-[26px] pr-[12px] rounded-[8px]`}>
                    <ul>
                        <li onClick={() => setEdit(true)} className={`${currentPath === "/dashboard" ? "hover:underline cursor-pointer flex justify-between border-b border-black":"hidden"}`}>
                            <p>Edit my rainbow</p> 
                            <img src={pencil} alt="" /> </li>
                        <li className={`${degree === "celsius" ? "text-menu-gray border-text-gray" : "text-black border-black" } flex justify-between border-b relative`}
                            onClick={onCklickHandlerCelcius}>
                            <img src={check} width={12} height={12} className={`${degree === "celsius" ? "opacity-100" : "opacity-0"} absolute -left-[12px] top-[50%] -translate-y-[50%] `}/> 
                            <p className={`${degree === "celsius" ? "menu-gray":"text-black"}`}>Celsius</p>
                            <p className={`${degree === "celsius" ? "menu-gray": "text-text-gray"}`}>°C</p>                  
                        </li>
                        <li className={`${degree === "fahrenheit" ? "text-menu-gray border-text-gray" : "text-black border-black" } flex justify-between border-b  relative`}
                            onClick={onCklickHandlerCelciusFahrenheit}>
                            <img src={check} width={12} height={12} className={`${degree === "fahrenheit" ? "opacity-100" : "opacity-0"} absolute -left-[12px] top-[50%] -translate-y-[50%] `}/> 
                            <p className={`${degree === "fahrenheit" ? "menu-gray":"text-black"}`}>Fahrenheit</p>
                            <p className={`${degree === "fahrenheit" ? "menu-gray": "text-text-gray"}`} >°F</p>
                        </li>
                        <li className= {`${currentPath === "/dashboard" ?  "flex justify-between mb-[10px]" : "hidden"}`}>
                            <p>Light</p>
                            <p>Dark</p>
                        </li>
                        <div className={`${currentPath === "/dashboard" ? "block" : "hidden"}`} >
                            <Slider />
                        </div>
                        <div className='flex justify-center mt-[15px]'>
                            <button onClick={() => setIsMenuOpen(false)} >Close</button>
                        </div>

                    </ul>
                </div>
            </div>
        </div>      
    )
}

export default Menu
import React from 'react'
import { NavLink } from 'react-router-dom';
import logo from '../../images/goju-fist.png'
import { useState } from 'react';


const Header = () => {

    const [menuStyle, setMenuStyle] = useState("none")
    const handleToggle = () => menuStyle === "none"?setMenuStyle("block"):setMenuStyle("none")
   
    return (
        <div >
            <nav className="bg-gray-600 text-white h-32	text-xl	flex items-center  justify-center ">
                <div className="inline-flex absolute items-center text-green-400 2xl:left-72 xl:left-36 lg:left-10 lg:visible invisible">
                    <img className="h-32" src={logo} alt="" />
                </div>
                <div className="text-white h-32	text-xl	inline-flex justify-center items-center ">

                    <NavLink className="m-8	hover:text-green-400 hover:bg-gray-800" to="/home">Home</NavLink>
                    <NavLink className="m-8 hover:text-green-400 hover:bg-gray-800	" to="/classes">Our Classes</NavLink>
                    <div className="hidden md:contents">
                        <NavLink className="m-8 hover:text-green-400 hover:bg-gray-800" to="/staff">Our Staff</NavLink>
                        <NavLink className="m-8 hover:text-green-400 hover:bg-gray-800	" to="/showcase">Showcase</NavLink>
                        <NavLink className="m-8 hover:text-green-400 hover:bg-gray-800" to="/about">About Us</NavLink>
                    </div>

                    <button className="md:hidden" onClick={handleToggle}>
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                        </svg>

                        <div className="text-green-400 bg-white absolute right-5 z-10" style={{ display: `${menuStyle}`}}>
                            <NavLink className="m-8 block hover:text-green-400 hover:bg-gray-800" to="/staff">Our Staff</NavLink>
                            <NavLink className="m-8 block hover:text-green-400 hover:bg-gray-800" to="/showcase">Showcase</NavLink>
                            <NavLink className="m-8 block hover:text-green-400 hover:bg-gray-800" to="/about">About Us</NavLink>
                        </div>

                    </button>

                </div>
            </nav>
        </div>
    )
}

export default Header

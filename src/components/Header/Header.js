import React from 'react'
import { NavLink } from 'react-router-dom';
import logo from '../../images/goju-fist.png'


const Header = () => {
    return (
        <div >
            <nav className="bg-gray-600 text-white h-32	text-xl	flex items-center">
                <div className="flex flex-row items-center text-green-400">
                    <img className="h-32 mx-28
" src={logo} alt="" />
                                    </div>
                <div className="text-white h-32	text-xl	flex justify-center items-center">
                <NavLink className="m-8	hover:text-green-400" to="/home">Home</NavLink>
                <NavLink className="m-8 hover:text-green-400	" to="/classes">Our Classes</NavLink>
                <NavLink className="m-8 hover:text-green-400" to="/staff">Our Staff</NavLink>
                <NavLink className="m-8 hover:text-green-400	" to="/showcase">Showcase</NavLink>
                <NavLink className="m-8 hover:text-green-400" to="/about">About Us</NavLink>
                </div>
            </nav>
        </div>
    )
}

export default Header

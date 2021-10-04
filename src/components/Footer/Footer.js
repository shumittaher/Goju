import React from 'react'
import japlogo from '../../images/jap-logo.jpg'
import logo from '../../images/logo.jpg'


const Footer = () => {
    return (
        <div className="bg-gray-600 text-white h-64	text-xl	flex justify-evenly	 items-center">
            <img className="w-36" src={japlogo} alt="" />

            <div className="text-2xl font-bold	 p-5	text-left">


                <h1 className="text-center my-2">Contact Us</h1>

                <div className="text-xl">
                    <div className="flex justify-between	 items-top">

                        <p className="text-left">Address:</p>
                        <small className="text-right">House 4587,<br /> Road  124,<br /> Banani DOHS</small>

                    </div>

                    <p>Phone : +880124778236</p>
                    <p>email: GojuryuSchool@BD.com </p>

                </div>


            </div>


            <img className="w-36" src={logo} alt="" />
        </div>
    )
}

export default Footer

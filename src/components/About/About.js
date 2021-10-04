import React from 'react'

const About = () => {
    return (
        <div className= "flex px-16 justify-center">

            <div className="m-10  border-8 border-green-400	w-1/3 text-center	 border-solid	 rounded-lg">
                <h1 className="w-full text-white bg-green-400 py-5	text-4xl	">Contact Us</h1>
                <div className="text-2xl font-bold	leading-loose p-5	text-left">
                    <p>Address:</p> <p className="text-center">House 4587,<br /> Road  124,<br /> Banani DOHS</p>
                    <p>Phone : +880124778236</p>
                    <p>email: GojuryuSchool@BD.com </p>
                </div>
            </div>
            <div className="m-10 border-8 text-center	border-green-400	w-1/3  border-solid	 rounded-lg">
                <h1 className="w-full text-white text-4xl py-5	bg-green-400">Our Credentials</h1>
                <div className="text-2xl font-bold	leading-loose p-5	text-left">
                    <h1>Member of Japan Karate Federation</h1>
                    <p>Gold Medals:</p> <p className="text-center">16 National<br /> 3 International</p>
                    <p>Years in Practice : 23</p>
                    <p>Please visit our DoJo for a tour</p>
                </div>
            </div>
        </div>
    )
}

export default About

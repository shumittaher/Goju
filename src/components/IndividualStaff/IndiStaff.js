import React from 'react'


const IndiStaff = (props) => {

    const { Name, Designation, image } = props.person

    return (

        <div className="w-72 h-96 shadow-2xl	">

            <img className="w-72" src={`https://template.hasthemes.com/judo/judo/img/trainer/${image}`} alt="" />

            <div className="text-white relative bottom-32 bg-green-400 p-5 shadow-2xl	">
                <p className="font-bold	text-2xl">{Name}</p>
                <p>{Designation}</p>
            </div>

        </div>
    )
}

export default IndiStaff

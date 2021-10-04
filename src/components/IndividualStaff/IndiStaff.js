import React from 'react'


const IndiStaff = (props) => {

    const { Name, Designation, image } = props.person

    return (
        <div className="w-72 max-h-96		">
            <img className="w-80 relative" src={`https://template.hasthemes.com/judo/judo/img/trainer/${image}`} alt="" />

            <div className="text-white relative bottom-32	 bg-green-400 p-5">
                <p className="font-bold	text-2xl">{Name}</p>
                <p>{Designation}</p>
            </div>
        </div>
    )
}

export default IndiStaff

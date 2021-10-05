import React from 'react'


const IndiStaff = (props) => {

    const { Name, Designation, image, descrip } = props.person
    const { showDescription } = props


    let description = ""


    if (showDescription) {
        description = <div className="bg-white relative bottom-80 z-20 p-5 shadow-2xl opacity-0 group-hover:opacity-100">
            <p>{descrip}</p>
        </div>
    }


    return (

        <div className="w-72 h-96 shadow-2xl group ">


            <div className="text-white relative top-64 bg-green-400 p-5 shadow-2xl z-10">
                <p className="font-bold	text-2xl">{Name}</p>
                <p>{Designation}</p>
            </div>

            <img className="w-72 relative bottom-32 z-0" src={`https://template.hasthemes.com/judo/judo/img/trainer/${image}`} alt="" />

            {description}
 


        </div>
    )
}

export default IndiStaff

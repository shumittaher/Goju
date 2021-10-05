import React from 'react'



const course = (props) => {

    const { nameclass, image, instructor, description, courseFee, duration } = props.details
    return (
        <div>

            <div className="bg-gray-600 rounded-lg my-2 p-4 text-white h-full">

                <img src={image} alt="" className="object-cover rounded-lg border-0 h-60 w-full" />

                <div className="h-80 flex flex-col justify-between">

                    <div className="">
                        <h1 className="text-green-400 text-3xl ">{nameclass}</h1>

                        <h2 className="">Instructor: {instructor}</h2> <small className="text-green-400">{duration}</small>

                        <p className="mt-5 text-justify	"><span className="text-green-400">Details:</span> {description}</p>
                    </div>

                    <div className="flex pb-3 justify-center">
                        <button className="px-8 py-3 border-transparent font-medium rounded-md text-white bg-green-400 hover:bg-white hover:text-green-400">Register for: {courseFee ? "BDT " + courseFee : "Free"}</button>
                    </div>

                </div>
            </div>

        </div >
    )
}

export default course

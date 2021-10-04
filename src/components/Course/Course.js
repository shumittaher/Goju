import React from 'react'



const course = (props) => {

    const { nameclass, image, instructor, description, courseFee } = props.details
    return (
        <div>

            <div className="bg-gray-600 rounded-lg border-0 p-4 text-white		 border-transparent	 h-full		">

                <img src={image} alt="" className="object-cover rounded-lg border-0 h-3/6		 w-full" />

                <div className="flex-col	 content-between justify-between place-self-end	">
                    <h1 className="text-green-400 text-3xl	my-8
                    ">{nameclass}</h1>

                    <h2 className="my-2
                    ">Will be taught by: {instructor}</h2>
                    <p className="mt-5"><span className="text-green-400">Your Takeaway:</span>  {description}</p>

                    <button className="mt-5 px-8 py-3  border-transparent font-medium rounded-md text-white bg-green-400 justify-self-end items-end self-end		hover:bg-white  hover:text-green-400">

                        Register for: {courseFee ? "BDT " + courseFee : "Free"}
                    </button>

                </div>
            </div>

        </div >
    )
}

export default course

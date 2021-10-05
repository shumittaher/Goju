import React from 'react'
import Course from './../Course/Course';

const Classes = (props) => {

    const courses= props.courses
    console.log('from Classes', courses)

    return (
        <div>

            <div className="m-4 grid lg:grid-cols-4 sm:grid-cols-2 gap-4 md:mx-10">
                {
                    courses.map((details) => <Course
                        key={details.courseID}
                        details={details}
                    ></Course>)
                }


            </div>

        </div>
    )
}

export default Classes

import React from 'react'
import Course from './../Course/Course';

const Classes = (props) => {

    const courses= props.courses
    console.log('from Classes', courses)

    return (
        <div>

            <div className="m-4 grid grid-cols-4 gap-4">
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

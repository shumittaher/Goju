import React from 'react'
import Course from './../Course/Course';

const Classes = (props) => {


    return (
        <div>

            <div className="m-4 grid grid-cols-3 gap-4">
                {
                    props.courses.map((details) => <Course
                        key={details.courseID}
                        details={details}
                    ></Course>)
                }


            </div>

        </div>
    )
}

export default Classes

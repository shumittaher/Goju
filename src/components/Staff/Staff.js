import React from 'react'
import { useState, useEffect } from 'react';
import IndiStaff from '../IndividualStaff/IndiStaff';

const Staff = (props) => {

    const children= props.children
    let showDescription = true
    if (children ==="from home") {
        showDescription = false
    } else {
        showDescription = true
    }


    const [trainer, setTrainer] = useState([])
    useEffect(() => {
        fetch("./trainers.JSON")
            .then(res => res.json())
            .then(data => setTrainer(data))
    }, [])

    

    return (

        <div className="flex flex-row flex-wrap	justify-evenly my-20">
            {trainer.map((person) => <IndiStaff
                key={person.Name}
                person={person}
                showDescription={showDescription}>
            </IndiStaff>)
            }

        </div>
    )
}

export default Staff

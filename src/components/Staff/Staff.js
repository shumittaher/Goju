import React from 'react'
import { useState, useEffect } from 'react';
import IndiStaff from '../IndividualStaff/IndiStaff';

const Staff = () => {

    const [trainer, setTrainer] = useState([])
    useEffect(() => {
        fetch("./trainers.JSON")
            .then(res => res.json())
            .then(data => setTrainer(data))
    }, [])


    return (
        <div className="flex justify-evenly	my-20">
            {trainer.map((person) => <IndiStaff 
            key={person.name}
            person={person}></IndiStaff>)
            }

        </div>
    )
}

export default Staff

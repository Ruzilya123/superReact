import { nanoid } from 'nanoid'
import React from 'react'
import { useState } from 'react'
import User from './User'

function SuperUser() {
    const initUsers = [
        {id: nanoid(10), name: 'user1', surname:'surn1', age: 13},
        {id: nanoid(10), name: 'user2', surname:'surn3', age: 14},
        {id: nanoid(10), name: 'user2', surname:'surn3', age: 15},
    ]

    const [notes, setNotes] = useState(initUsers)
    const [ban, setBan] = useState(false)
    
    function changeField(id, name, event) {
		setNotes(notes.map(note => {
			if (note.id === id) {
				note[name] = event.target.value;
			}
			
			return note;
		}));
	}
    const users = notes.map(note => {
        return <p>
            <User
                key={note.id}
                id={note.id}
                name={note.name}
                surname={note.surname}
                age={note.age}
                changeField={changeField}
            />
            <p>
                <span>{ban? 'user banned!' : 'user active'}</span>
                <button onClick={() => setBan(!ban)}>Ban?</button>
            </p>
        </p>
    })

    return (
        <div>
           {users}
        </div>
    )
}

export default SuperUser
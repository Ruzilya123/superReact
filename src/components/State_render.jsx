import React from 'react'
import { useState } from 'react';
import { nanoid } from 'nanoid';

function State_render() {
    // const initNotes = [
    //         {text: 'note1', isEdit: false},
    //         {text: 'note2', isEdit: false},
    //         {text: 'note3', isEdit: false},
    //     ]
    // const [notes, setNotes] = useState(initNotes);
    
	
	// function startEdit(index) {
	// 	const copy = Object.assign([], notes);
	// 	copy[index].isEdit = true;
	// 	setNotes(copy);
	// }
	
	// function endEdit(index) {
	// 	const copy = Object.assign([], notes);
	// 	copy[index].isEdit = false;
	// 	setNotes(copy);
	// }
	
	// function changeNote(index, event) {
	// 	const copy = Object.assign([], notes);
	// 	copy[index].text = event.target.value;
	// 	setNotes(copy);
	// }
	
	// const result = notes.map((note, index) => {
	// 	let elem
		
	// 	if (!note.isEdit) {
	// 		elem = <div>
    //             <button onClick={() => startEdit(index)}>
	// 			{note.text}
	// 		    </button>
    //         </div> 
	// 	} else {
	// 		elem = <div>
    //             <input
	// 			value={note.text}
	// 			onChange={event => changeNote(index, event)}
	// 		    />
    //             <button onClick={() => endEdit(index)}>End edit</button>
    //         </div>

	// 	}
		
	// 	return <li key={index}>{elem}</li>;
	// });

	// return <ul>
	// 	{result}
	// </ul>;
    const initNotes = [
        {
            id: nanoid(10),
            fields: [
                {name: 'prop1', value: 'value11', isEdit: false},
                {name: 'prop2', value: 'value12', isEdit: false},
                {name: 'prop3', value: 'value13', isEdit: false},
            ]
        },
        {
            id: nanoid(10),
            fields: [
                {name: 'prop1', value: 'value21', isEdit: false},
                {name: 'prop2', value: 'value22', isEdit: false},
                {name: 'prop3', value: 'value23', isEdit: false},
            ]
        },
        {
            id: nanoid(10),
            fields: [
                {name: 'prop1', value: 'value31', isEdit: false},
                {name: 'prop2', value: 'value32', isEdit: false},
                {name: 'prop3', value: 'value33', isEdit: false},
            ]
        },
    ];
    const [notes, setNotes] = useState(initNotes);
	
	const rows = notes.map(note => {
		const cells = note.fields.map(field => {
			let elem;
			
			if (!field.isEdit) {
				elem = <span onClick={() => startEdit(note.id, field.name)}>
					{field.value}
				</span>;
			} else {
				elem = <input
					value={field.value}
					onChange={(event) => changeCell(note.id, field.name, event)}
					onBlur={() => endEdit(note.id, field.name)}
				/>;
			}
			
			return <td key={field.name}>{elem}</td>;
		});
		
		return <tr key={note.id}>{cells}</tr>;
	});
    function superFunction(id, name, dict) {
        setNotes(notes.map(note => {
            if (note.id === id) {
                const fields = note.fields.map(field => {
                    if (field.name === name) {
                        return {...field, ...dict}
                    } else{
                        return field;
                    }
                });
                
                return { id, fields };
            } else {
                return note;
            }
        }));
    }
	
	function startAndEndEdit(id, name, isStart) {
		superFunction(id, name, {isEdit: isStart})
	}

    function startEdit(id, name) {
        startAndEndEdit(id, name, true);
    }
	
	function endEdit(id, name) {
		startAndEndEdit(id, name, false);
	}
	
	function changeCell(id, name, event) {
		superFunction(id, name, {value: event.target.value})
	}
	
	return <div>
		<table>
			<tbody>
				{rows}
			</tbody>
		</table>
	</div>;
}

export default State_render

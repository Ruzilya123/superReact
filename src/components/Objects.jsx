import React, { useState } from 'react'
import { nanoid } from 'nanoid';



function Objects() {
	const [obj1, setObj1] = useState({
		prop1: 'value1',
		prop2: 'value2',
		prop3: 'value3',
	});
	const [value1, setValue1] = useState('')
	const [value2, setValue2] = useState('')
	const [value3, setValue3] = useState('')
	const [edit, setEdit] = useState(null)

	const initNotes1 = [
		{
			id: nanoid(10),
			prod1: 'value11',
			catg1: 'value11',
			cost: 300,
		},
		{
			id: nanoid(10),
			prod2: 'value13',
			catg2: 'value31',
			cost: 200,
		},
		{
			id: nanoid(10),
			prod3: 'value12',
			catg3: 'value21',
			cost: 100,
		},
	]
	const [notes1, setNotes1] = useState(initNotes1)

	const id = nanoid(10)

    const result2 = notes1.map(note => {
        return <div>
			<table border='1'>
				<tr key={note.id}>
					<td>{note.prod1}</td>
					<td>{note.catg1}</td>
					<td>{note.cost}</td>
					<button onClick={() => delete1(note.id)}>Delete</button>
					<button onClick={() => setEdit(note.id)}>edit</button>
				</tr>
				<tr key={note.id}>
					<td>{note.prod2}</td>
					<td>{note.catg2}</td>
					<td>{note.cost}</td>
					<button onClick={() => delete1(note.id)}>Delete</button>
					<button onClick={() => setEdit(note.id)}>edit</button>
				</tr>
				<tr key={note.id}>
					<td>{note.prod3}</td>
					<td>{note.catg3}</td>
					<td>{note.cost}</td>
					<button onClick={() => delete1(note.id)}>Delete</button>
					<button onClick={() => setEdit(note.id)}>edit</button>
				</tr>
			</table>
			<form>
				<input onClick={() => setEdit(note.id)} placeholder='edit' />
			</form>
		</div>
    })
	function delete1() {
		setNotes1([...notes1.filter(note => note.id !== id)])
	}
	const newElem1 = {
		id: nanoid(10),
		prop1: 'value41',
		prop2: 'value42',
		prop3: 'value43',
	};
	function addItem() {
		let obj = {
			id: nanoid(10),
			prop1: 'value1',
			prop2: 'value2',
			prop3: 'value3',	
		};
		setNotes1([...notes1, obj])
	}
	const data = {
		id: nanoid(10),
		prop1: 'value21 !',
		prop2: 'value22 !',
		prop3: 'value23 !',
	};
	function getValue(prop) {
		return notes1.reduce((res, note) => note.id === edit ? note[prop] : res, '');
	}
	function changeItem(prop, event) {
		setNotes1(notes1.map(note =>
			note.id === edit ? {...note, [prop]: event.target.value} : note
		));
	}
	function saveItem() {
		if (edit) {
			setEdit(null);
		} else {
			setNotes1([...notes1, obj1]);
			setObj1(getInitObj());
		}
	}
	function getInitObj() {
		return {
			id: nanoid(10),
			prop1: '',
			prop2: '',
			prop3: ''
		}
	}

  return (
    <div>
		<p>
			<button>{obj1.prop1}</button>
			<button>{obj1.prop2}</button>
			<button>{obj1.prop3}</button>
		</p>
		<p>
			{result2}
		</p>
		<form>
			<input value={value1} onChange={event => setValue1(event.target.value)} />
			<input value={value2} onChange={event => setValue2(event.target.value)} />
			<input value={value3} onChange={event => setValue3(event.target.value)} />
			<button onClick={addItem}>save</button>
		</form>
		<input value={getValue('prop1')} onChange={event => changeItem('prop1', event)} />
		<input value={getValue('prop2')} onChange={event => changeItem('prop2', event)} />
		<input value={getValue('prop3')} onChange={event => changeItem('prop3', event)} />
		<button onClick={() => setEdit(null)}>save</button>
		
        <p>
		<button onClick={saveItem}>universal save</button>
		</p>

    </div>
  )
}

export default Objects;
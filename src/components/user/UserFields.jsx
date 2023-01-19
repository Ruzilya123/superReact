import React, { useState } from 'react'

function UserFields({id, text, type, changeField}) {
    const [isEdit, setIsEdit] = useState(false)
    return <div>
        {
            isEdit 
            ? <input
                value={text}
                onChange={event => changeField(id, type, event)}
                onBlur={() => setIsEdit(false)} 
            /> 
            : <span onClick={() => setIsEdit(true)}>{text}</span>
        }
    </div> 
    
}

export default UserFields
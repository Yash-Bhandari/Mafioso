import React, {useState} from 'react'
import AddRole from './AddRole';

export default function AddedRole(props) {
    let [editing, setEditing] = useState(false)
    return(
        !editing 
        ?<div className='added-role' onClick={()=>setEditing(true)}>
            {props.role.name} x {props.role.quantity}
        </div>
        : <AddRole addRole={role => props.editRole(props.index, role)} role={props.role} afterEdit={()=>setEditing(false)}/>

    )
}
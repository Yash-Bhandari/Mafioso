import React from 'react'

export default function AddedRole(props) {
    return(
        <div className='added-role'>{props.role.name} x {props.role.quantity}</div>
    )
}
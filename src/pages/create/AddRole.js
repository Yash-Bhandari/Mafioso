import React from 'react';
import * as $ from 'jquery'

export default function AddRole(props){
    return (
      <div className='role-add'>
            {roleDataList}
            <input className='role-add-name' placeholder='Role' list='possible-roles'></input>
            <input className='role-add-quantity' placeholder='#' type='number'></input>
            <button className='role-add-submit' onClick={()=> handleClick(props.addRole)}>Add</button>
      </div>
    )
}

const roleDataList = (
    <datalist id='possible-roles'>
        <option value='Mafia'></option>
        <option value='Doctor'></option>
        <option value='Investigator'></option>
        <option value='Jester'></option>
        <option value='Vigilante'></option>
        <option value='Werewolf'></option>
        <option value='Gravedigger'></option>
        <option value='Lookout'></option>
        <option value='Mayor'></option>
    </datalist>
)

function handleClick(addRoleFunction){
    let roleName = $('input.role-add-name').val();
    let roleQuantity = $('input.role-add-quantity').val();
    if(roleQuantity === '')
        roleQuantity = 1;
    $('input.role-add-name').val('')
    $('input.role-add-quantity').val('')
    console.log({name: roleName, quantity: roleQuantity})
    addRoleFunction({
        name: roleName,
        quantity: roleQuantity
    });
}
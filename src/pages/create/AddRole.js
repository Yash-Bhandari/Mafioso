import React from 'react';
import * as $ from 'jquery'

export default function AddRole({role, addRole, afterEdit}){
    return (
      <div className='role-add'>
            {roleDataList}
            <input className='role-add-name' placeholder='Role' defaultValue={role?role.name:undefined} list='possible-roles' onInput={handleInput}></input>
            <input className='role-add-quantity' placeholder='#' defaultValue={role?role.quantity:undefined} type='number' onKeyDown={e => handleEnter(e)}></input>
            <button className='role-add-submit' onClick={e => handleClick(e, addRole, afterEdit)}>Add</button>
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
        <option value='Townie'></option>
    </datalist>
)

function handleEnter(e){

    if (e.keyCode === 13){
        $(e.target).parent().find('button.role-add-submit').click();
    }
}

function handleClick(e, addRoleFunction, afterEdit){
    let roleName = $(e.target).parent().find('input.role-add-name').val();
    let roleQuantity = $(e.target).parent().find('input.role-add-quantity').val();  
    $(e.target).parent().find('input.role-add-name').val(undefined)
    $(e.target).parent().find('input.role-add-quantity').val(undefined)

    if(roleQuantity <= 0) 
        addRoleFunction(null);

    else {
        if(roleQuantity === '')
            roleQuantity = 1;

        addRoleFunction({
            name: roleName,
            quantity: roleQuantity
        });
    }
    if (afterEdit)
        afterEdit();
}

function handleInput(){
    let input = $('input.role-add-name')[0];
    let options = $('#possible-roles')[0].options;

    for (let i = 0; i < options.length; i++){
        if (options.item(i).value.toUpperCase() === input.value.toUpperCase()) {
            input.value = options.item(i).value;    
        }
        if (options.item(i).value === input.value) {
            $('input.role-add-quantity').focus();
        }
    }
}
import React, { useState, useRef } from 'react';

export default function AddRole({ role, addRole, afterEdit }) {
    const [name, setName] = useState(role ? role.name : '');
    const [quantity, setQuantity] = useState(role ? role.quantity : '');
    const nameInput = useRef(null);
    const quantityInput = useRef(null);

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!name) {
            alert('Enter a name for the role');
            return;
        }

        addRole({
            name: name,
            quantity: quantity > 0 ? quantity : 1
        });

        setName('');
        setQuantity('');
        nameInput.current.focus();
        if (afterEdit)
            afterEdit();
    }

    const handleNameInput = (e) => {
        let newName = e.target.value; //newName is used instead of name as name will not be updated in time
        setName(newName);

        possibleRoles.forEach(r => {
            if(r.toUpperCase() === newName.toUpperCase()){
                setName(r);
                quantityInput.current.focus();
                return;
            }
        });
    }

    return (
        <form className='role-add' onSubmit={e => handleSubmit(e)}>
            {roleDataList}
            <input
                autoFocus
                ref={nameInput}
                className='role-add-name'
                placeholder='Role'
                value={name}
                list='possible-roles'
                onChange={e => handleNameInput(e)} />
            <input
                ref={quantityInput}
                className='role-add-quantity'
                placeholder='#'
                value={quantity}
                type='number'
                onChange={e => setQuantity(e.target.value)} />
            <button
                className='role-add-submit'
                type='submit'>
                Add
            </button>
        </form>
    )
}

const possibleRoles = [
    'Mafia', 'Doctor', 'Investigator', 'Jester', 'Vigilante', 
    'Werewolf', 'Gravedigger', 'Lookout', 'Mayor', 'Townie']
const roleDataList = (
    <datalist id='possible-roles'>
        {possibleRoles.map(r => <option value={r}/>)}
    </datalist>
)


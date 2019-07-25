import React from 'react';
import './play.css'
import { tsPropertySignature } from '@babel/types';

export default function PlayersAndRoles(props){
    //console.log(props);
    let availableRoles = [];
    let joinedPlayers = [];
    let key = 0;
    props.roles.forEach(role => availableRoles.push(<Role role={role} key={key++}/>))
    props.players.forEach(player => joinedPlayers.push(<Role role={player} key={key++}/>))
    
    return (
        <div id='players-and-roles'>
            <h2 id='list-header'>Players</h2>
            <TableList roles={joinedPlayers}/>
            <h2 id='list-header'>Roles</h2>
            <TableList roles={availableRoles}/>
        </div>
    
    )
}

function TableList(props) {
    let rows = []
    for (let i = 0; i < props.roles.length; i+=2){
        rows.push(
            <trow>
                <td>{props.roles[i]}</td>
                {i+1 < props.roles.length && 
                    <td>{props.roles[i+1]}</td>}
            </trow>
        )
    }
    return (
        <tbody>
            {rows}
        </tbody>
    )
}

function Role(props) {
    return(
        <div className='available-role'>
            {props.role}
        </div>
    )
}
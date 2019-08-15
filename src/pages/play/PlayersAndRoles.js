import React from 'react';
import './play.css'

export default function PlayersAndRoles(props){
    //console.log(props);
    let availableRoles = [];
    let joinedPlayers = [];
    props.roles.forEach((role, i) => availableRoles.push(<Role role={role} key={i}/>))
    props.roles.forEach((role, i) => joinedPlayers.push(<Role dead={true} key={i}/>));
    props.players.forEach((player, i) => joinedPlayers[i] = <Role role={player} key={i}/>)
    
    return (
        <div id='players-and-roles'>
            <h2 id='list-header'>Players</h2>
            <div className='list'>{joinedPlayers}</div>
            <h2 id='list-header'>Roles</h2>
            <div className='list'>{availableRoles}</div>
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
        props.dead
        ? <div className='dead available-role'>Empty</div>
        : <div className='available-role'>{props.role}</div>
    )
}
import React from 'react';
import './join.css'

export default function PlayersAndRoles(props){
    let availableRoles = [];
    let joinedPlayers = [];
    props.roles.forEach(role => availableRoles.push(<Role role={role}/>))
    props.players.forEach(player => joinedPlayers.push(<Role role={player}/>))
    return (
        <div id='players-and-roles'>
            <div id='players-list'>
                <h2 id='available-role-header'>Players</h2>
                {joinedPlayers}
            </div>
            <div id='roles-list'>
                <h2 id='available-role-header'>Available Roles</h2>
                {availableRoles}
            </div>
        </div>
    
    )
}

function Role(props) {
    return(
        <div className='available-role'>
            {props.role}
        </div>
    )
}
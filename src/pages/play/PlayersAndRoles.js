import React from 'react';
import './play.css'

export default function PlayersAndRoles(props){
    //console.log(props);
    let availableRoles = [];
    let joinedPlayers = [];
    let key = 0;
    props.roles.forEach(role => availableRoles.push(<Role role={role} key={key++}/>))
    props.players.forEach(player => joinedPlayers.push(<Role role={player} key={key++}/>))
    return (
        <div id='players-and-roles'>
            <div id='players-list'>
                <h2 id='list-header'>Players</h2>
                {joinedPlayers}
            </div>
            <div id='roles-list'>
                <h2 id='list-header'>Roles</h2>
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
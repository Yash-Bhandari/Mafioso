import React from 'react';
import PlayersAndRoles from './PlayersAndRoles.js';
import './join.css';

export default class Join extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            roles: [],
            players: []
        }
    }

    componentDidMount(){

    }

    render(props){
        return (
            <div>
                <PlayersAndRoles roles={['Mafia', 'Investigator']} players={['Yashaswi', 'Sam']}/>
                <div id='join-choose-name'>
                    <input id='join-username' placeholder='Your Name' type='text'></input>
                    <button id='join-submit'>Get Role</button>
                </div>
            </div>
        )
    }
}

async function getPlayersAndRoles(backend, gameCode){
    let response = await fetch(backend + '/' + gameCode, )
}
import React from 'react';
import PlayersAndRoles from './PlayersAndRoles.js';
import './join.css';

const backend = 'https://mafioso-app.herokuapp.com/mafioso/'

export default class Join extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            roles: [],
            players: []
        }
    }

    componentDidMount(){
        getPlayersAndRoles(this.props.match.params.gameCode).then(
            temp => this.setState({roles: temp.roles, players: temp.players})
        );
    }

    render(props){
        console.log(this.state.roles);
        return (
            <div>
                <PlayersAndRoles roles={this.state.roles} players={this.state.players}/>
                <div id='join-choose-name'>
                    <input id='join-username' placeholder='Your Name' type='text'></input>
                    <button id='join-submit'>Get Role</button>
                </div>
            </div>
        )
    }
}

async function getPlayersAndRoles(gameCode){
    let response = await fetch(backend + gameCode);
    let json = await response.json();
    return json;
    //return JSON.parse(response.json());
}
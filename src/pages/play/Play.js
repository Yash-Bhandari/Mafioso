import React from 'react';
import PlayersAndRoles from './PlayersAndRoles.js';
import RoleCard from './RoleCard.js';
import ServerLiason from '../../utilities/serverLiason';
import './play.css';

const backend = 'https://mafioso-app.herokuapp.com/'

export default class Join extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            joined: false,
            yourRole: null,
            id: null,
            roles: [],
            players: []
        }
        this.updatePlayersAndRoles = this.updatePlayersAndRoles.bind(this);
    }

    componentDidMount(){
        let serverLiason =  new ServerLiason(this.props.backend, this.props.match.params.gameCode);
        this.updatePlayersAndRoles(serverLiason);
        this.setState({
            serverLiason: serverLiason,
            updater: window.setInterval(() => this.updatePlayersAndRoles(serverLiason), 2000)
        });
        
    }

    componentWillUnmount() {
        window.clearInterval(this.state.updater);
    }

    updatePlayersAndRoles = (serverLiason) => {
        serverLiason.getPlayersAndRoles().then(
            playersAndRoles => this.setState({roles: playersAndRoles.roles, players: playersAndRoles.players})
        );
        if (this.isFull())
            window.clearInterval(this.state.updater);
    }

    isFull() {
        return this.state.roles.length === this.state.players.length;
    }

    async joinGame() {
        let playerName = document.getElementById('join-username').value;
        this.state.serverLiason.joinGame(playerName).then(
            reply => this.setState({
                joined: true,
                yourRole: reply.role,
                id: reply.id
            })
        ); 
    }

    render(props){
        return (
            <div>
                <PlayersAndRoles roles={this.state.roles} players={this.state.players}/>
                {!this.isFull() && !this.state.joined &&
                <div id='join-choose-name'>
                    <input id='join-username' placeholder='Your Name' type='text'></input>
                    <button id='join-submit' onClick={()=>this.joinGame()}>Get Role</button>
                </div>}
                {this.state.joined ?
                    <RoleCard role={this.state.yourRole}/> :
                    (this.isFull() && <h2 className='text'></h2>)
                }
            </div>
        )
    }
}
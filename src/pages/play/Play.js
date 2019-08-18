import React from 'react';
import PlayersAndRoles from './PlayersAndRoles.js';
import RoleCard from './RoleCard.js';
import ServerLiason from '../../utilities/serverLiason';
import './play.css';

export default class Join extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            joined: false,
            yourName: '',
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
            playersAndRoles => this.setState({roles: playersAndRoles.roles.sort(), players: playersAndRoles.players.sort()})
        );
        if (this.isFull())
            window.clearInterval(this.state.updater);
    }

    isFull() {
        return this.state.roles.length === this.state.players.length;
    }

    joinGame = async e => {
        e.preventDefault();
        if (this.state.players.some(p => p.toUpperCase() === this.state.yourName.toUpperCase())){
            alert('That name is taken.')
            return;
        }

        this.state.serverLiason.joinGame(this.state.yourName).then(
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
                <form onSubmit={e=>this.joinGame(e)}id='join-choose-name'>
                    <input 
                        id='join-username' 
                        value={this.state.yourName}
                        onChange={e => this.setState({yourName: e.target.value})}
                        placeholder='Your Name' 
                        type='text'/>
                    <button id='join-submit' type='submit'>Get Role</button>
                </form>}
                {this.state.joined ?
                    <RoleCard role={this.state.yourRole}/> :
                    (this.isFull() && <h2 className='text'></h2>)
                }
            </div>
        )
    }
}
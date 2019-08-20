import React from 'react';
import ServerLiason from '../../utilities/serverLiason';
import './Host.css';
import rope from './rope-icon.svg';

export default class Host extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            id: this.props.id,
            gameCode: this.props.gameCode,
            roles: []
        }
    }

    componentDidMount() {
        let serverLiason = new ServerLiason(this.props.backend, this.props.gameCode);
        this.updateRoles(serverLiason);
        this.setState({
            updater: window.setInterval(() => this.updateRoles(serverLiason), 2000),
            serverLiason: serverLiason
        });
    }

    updateRoles(serverLiason) {
        if (this.state.roles.length !== 0 && this.numJoined() === this.state.roles.length)
            return;
        serverLiason.getRoleList(this.props.id).then(
            roleList => {
                if (roleList)
                    this.setState({ roles: roleList })
            }
        );
    }

    numJoined() {
        return this.state.roles.reduce(
            (total, role) => total += role.playerName === "" ? 0 : 1,
            0
        );
    }

    isFull() {
        return this.state.roles.every(role => role.filled);
    }

    kill(playerName) {
        if (this.isFull()) {
            let temp = this.state.roles.slice();
            temp.find(role => role.playerName == playerName).alive = false;
            this.setState({
                roles: temp
            })
            this.state.serverLiason.killPlayer(playerName, this.state.id);
        }
    }

    render(props) {
        let roles = [];
        let key = 0;
        this.state.roles.forEach(role => {
            roles.push(<Role role={role} key={key++}
                kill={playerName => this.kill(playerName)} />)
        });
        return (
            <div>
                <h1 className='page-header'>Code: {this.state.gameCode}</h1>
                <h2 className='text fill-status'>{this.numJoined()} / {this.state.roles.length} Joined</h2>
                <div className='host-role-list'>
                    {roles}
                </div>
            </div>
        )
    }
}

function Role(props) {
    let className = 'host-role-text card';
    let filledAndAlive = props.role.filled && props.role.alive;
    if (!filledAndAlive)
        className = 'dead ' + className;
    return (
        <div className='host-role'>
            <div className={className}>
                {props.role.roleName}: {props.role.playerName ? props.role.playerName : 'Open'}
            </div>
            <div className='host-role-kill' onClick={() => props.kill(props.role.playerName)}>
                <img id='rope-icon' src={rope} />
            </div>
        </div>
    )
}

function role(playerName, roleName) {
    return {
        playerName: playerName,
        roleName: roleName
    }
}
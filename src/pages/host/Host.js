import React from 'react';
import ServerLiason from '../../utilities/serverLiason';
import './Host.css';
import rope from './rope-icon.png';

export default class Host extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            id: this.props.id,
            gameCode: this.props.gameCode,
            roles: []
        }
    }

    componentDidMount(){
        console.log(this.props.backend + this.props.gameCode + '/' + this.props.id)
        let serverLiason = new ServerLiason(this.props.backend, this.props.gameCode);
        this.updateRoles(serverLiason);
        this.setState({
            updater: window.setInterval(()=>this.updateRoles(serverLiason), 2000),
            serverLiason: serverLiason
        });
    }

    updateRoles(serverLiason) {
        serverLiason.getRoleList(this.props.id).then(
            roleList => {
                this.setState({roles: roleList})
            }
        );
    }
    
    isFull() {
        return this.state.roles.every(role => role);
    }

    render(props) {
        let roles = [];
        this.state.roles.forEach(role => {
            roles.push(<Role role={role}/>)
        });
        return (
            <div>
                <h1 className='page-header'>Game Code: {this.state.gameCode}</h1>
                <div className='host-role-list'>
                    {roles}
                </div>
            </div>
        )
    }
}

function Role(props){

    return (
        <div className='host-role'>
            <div className='host-role-text card'>
                {props.role.roleName}: {props.role.playerName ? props.role.playerName : 'Open'}
             </div>
            <div className='host-role-kill'>
                <img id='rope-icon' src={rope}/>
            </div>
        </div>
    )
}

function role(playerName, roleName){
    return {
        playerName: playerName,
        roleName: roleName
    }
}
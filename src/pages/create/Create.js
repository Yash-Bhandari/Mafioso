import React from 'react'
import AddRole from './AddRole.js';
import AddedRole from './AddedRole.js';
import Host from '../host/Host.js';
import './Create.css'

export default class Create extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            addedRoles: [],
            gameStarted: false, 
            Host: null
        };
        this.startButton = React.createRef();
        this.addRole = this.addRole.bind(this);
        this.editRole = this.editRole.bind(this);
        this.renderAddedRoles = this.renderAddedRoles.bind(this);
        this.createGame = this.createGame.bind(this);
    }

    renderAddedRoles() {
        let roles = [];
        for (let i = 0; i < this.state.addedRoles.length; i++){
            if (this.state.addedRoles[i])
                roles.push(<AddedRole role={this.state.addedRoles[i]} key={i} index={i} editRole={this.editRole}/>);
        }
        return roles;
    }

    //Returns index of newly added role
    addRole(role) {
        this.setState({
            addedRoles: [...this.state.addedRoles, role]
        })
        return this.state.addedRoles.length-1;
    }

    editRole(i, newRole){
        let temp = [...this.state.addedRoles];
        temp[i] = newRole;
        console.log('Edited the ' + i + 'th role to')
        console.log(newRole)
        this.setState({
            addedRoles: temp
        })
    }

    numPlayers(){
        return this.state.addedRoles.reduce((total, role) => role ? total + parseInt(role.quantity) : total, 0);
    }

    render(props){
        if (this.state.gameStarted) {
            return this.state.Host;
        }
        return(
            <div>
                <h1 className='page-header'>Game Creation</h1>
                <div id='role-add-list'>
                {this.renderAddedRoles()}
                <AddRole addRole={this.addRole}/>
                </div>
                <button className='main-menu-button' ref={this.startButton} onClick={this.createGame}>Start Game ({this.numPlayers()} players)</button>
            </div>
        );
    }

    createGame = async function(){
        this.startButton.current.setAttribute('disabled', 'disabled');
        let roleList = [];
        for (let j = 0; j < this.state.addedRoles.length; j++){
            let roleType = this.state.addedRoles[j];
            for (let i = 0; i < roleType.quantity; i++) {
                roleList.push(roleType.name);
            }
        }

        const request = {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({roles: roleList})
        };
        console.log(request);
        let response = await fetch(this.props.backend + 'create', request);
        let gameCode = response.headers.get('gameCode');
        let id = response.headers.get('id');
        console.log("id is : " + id);
        this.setState({
            gameStarted: true,
            Host: <Host backend={this.props.backend} gameCode={gameCode} id={id}/>
        })
    }
}
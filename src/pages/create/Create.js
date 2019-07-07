import React from 'react'
import AddRole from './AddRole.js';
import AddedRole from './AddedRole.js'
import './Create.css'
import { tsImportEqualsDeclaration } from '@babel/types';

export default class Create extends React.Component {
    constructor(props){
        super(props);
        this.state = {addedRoles: []};
        this.addRole = this.addRole.bind(this);
        this.renderAddedRoles = this.renderAddedRoles.bind(this);
        this.createGame = this.createGame.bind(this);
    }

    renderAddedRoles() {
        let roles = [];
        for (var addedRole of this.state.addedRoles){
            roles.push(<AddedRole role={addedRole}/>);
        }
        return roles;
    }

    addRole(role) {
        this.setState({
            addedRoles: [...this.state.addedRoles, role]
        })
    }

    render(props){
        return(
            <div>
                <h1 className='page-header'>Game Creation</h1>
                {this.renderAddedRoles()}
                <AddRole addRole={this.addRole}/>
                <button className='main-menu-button' onClick={this.createGame}>Start Game</button>
            </div>
        );
    }

    createGame = async function(){
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
        let response = await fetch(this.props.backend + '/create', request);
        let gameCode = response.headers.get('gameCode');
        console.log(gameCode);
        window.location.href = 'http://localhost:3000/host/' + gameCode;
    }
}
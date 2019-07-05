import React from 'react'
import AddRole from './AddRole.js';
import AddedRole from './AddedRole.js'
import './Create.css'

export default class Create extends React.Component {
    constructor(props){
        super(props);
        this.state = {addedRoles: []};
        this.addRole = this.addRole.bind(this);
        this.renderAddedRoles = this.renderAddedRoles.bind(this);
    }

    renderAddedRoles() {
        let roles = [];
        console.log(this.state.addedRoles)
        for (var addedRole of this.state.addedRoles){
            console.log(addedRole)
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
                <button className='main-menu-button' onClick={()=>createGame()}>Start Game</button>
            </div>
        );
    }

    createGame(){
        const request = {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: this.state.addedRoles
        };
        let response = await fetch(this.props.backend, request);
        let gameCode = response.headers.get('gameCode');
        this.props.goTo('host' + gameCode);
    }
}
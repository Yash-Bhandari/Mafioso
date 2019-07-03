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
            </div>
        );
    }


}
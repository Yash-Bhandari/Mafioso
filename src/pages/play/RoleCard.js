import React from 'react';

export default class RoleCard extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            showRole: false
        }
    }

    render(props){
        return (
            <div className="role-card" onClick={() => this.setState(oldState => {return {showRole: !oldState.showRole}})}>
                {this.state.showRole ?
                    <div className = "role-card-side">Your role is {this.props.role}. Tap to hide</div> :
                    <div className = "role-card-side">Tap to reveal your role</div> 
                }
            </div>
        )
    }

}
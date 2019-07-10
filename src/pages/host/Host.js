import React from 'react';
import ServerLiason from '../../utilities/serverLiason';
import './Host.css';

export default class Host extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            gameCode: this.props.match.params.gameCode,
            role: []
        }
    }

    componentDidMount(){
        let serverLiason = new ServerLiason(this.props.backend + this.state.gameCode);

    }


    render(props) {
        return (
            <div>
                <div className="gamecode card">Game Code: <span id='gamecode-text'>{this.state.gameCode}</span></div>
                <div className='host-role-list'>
                    <h2 className='text'>Roles</h2>
                </div>
            </div>
        )
    }
}

function role(props){
    return (
        <div className='host-role'>
            <div className='host-role-player-name'>{props.role.playerName}</div>
            <div className='host-role-role-name'>{props.role.roleName}</div>
        </div>
    )
}
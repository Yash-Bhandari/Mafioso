import React from 'react';
import './Home.css';
import * as $ from 'jquery';

export default function Menu(props){
    return (
        <div id='main-menu'>
                <JoinButton goTo={props.goTo}/>           
                <button className='main-menu-button' onClick={()=>props.goTo('create')}>Create Game</button>
        </div>
    )
}

class JoinButton extends React.Component {
    constructor(props){
        super(props)
        this.state = {clicked: false}
    }

    render(props){
        return (
            !this.state.clicked ? 
                <button className='main-menu-button' onClick={()=>this.setState({clicked: true})}>Join Game</button>:
                <InputButton goTo={this.props.goTo} backend={this.props.backend}/>
        )
    }
}

function InputButton (props) {
    return (
        <div id='game-code'>
            <div id='game-code-input-left'>
                <input id='game-code-input' type='text' placeholder='code' name='game-code' width='5'></input>
            </div>
            <div id='game-code-input-right'>
                <button className='game-code-button' onClick={()=>joinGame(props.backend)}>Join Game</button>
            </div>
        </div>
    )
}

async function joinGame(backend) {
    let gameCode = $('input.game-code-button').val();
    
    let response = await fetch(backend + '/' + gameCode);

}

function goTo(url) {
    window.location.href=url;
}
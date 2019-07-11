import React from 'react';
import './Home.css';
import * as $ from 'jquery';
import { tsPropertySignature } from '@babel/types';

const baseUrl = 'http://localhost:3000/'

export default function Menu(props){
    return (
        <div id='main-menu'>
                <JoinButton backend={props.backend}/>           
                <button className='main-menu-button' onClick={()=>goTo('host')}>Create Game</button>
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
                <InputButton backend={this.props.backend}/>
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
                <button className='game-code-button' onClick={()=>joinGame()}>Join Game</button>
            </div>
        </div>
    )
}

async function joinGame() {
    let gameCode = $('#game-code-input').val().toUpperCase();
    console.log(gameCode);
    goTo(gameCode);

}

function goTo(location) {
    window.location.href='/'+location;
}
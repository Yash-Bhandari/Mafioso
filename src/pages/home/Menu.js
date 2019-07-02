import React from 'react';
import './Home.css';
import { genericTypeAnnotation } from '@babel/types';

export default function Menu(props){
    return (
        <div id='main-menu'>
                <JoinButton/>           
                <button className='main-menu-button'>Create Game</button>
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
                <InputButton/>
        )
    }
}

function InputButton (props) {
    return (
        <div id='game-code'>
            <div id='game-code-input-left'>
                <input id='game-code-input' type='text' name='game-code' width='5'></input>
            </div>
            <div id='game-code-input-right'>
                <button className='game-code-button' onClick={()=>this.setState({clicked: true})}>Join Game</button>
            </div>
        </div>
    )
}

function goTo(url) {
    window.location.href=url;
}
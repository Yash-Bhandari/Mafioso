import React, {useState} from 'react';
import './Home.css';

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
    let [gameCode, setGameCode] = useState('');

    const joinGame = e => {
        e.preventDefault();
        goTo(gameCode);
    }
    return (
        <form id='game-code' onSubmit={e=>joinGame(e)}>
            <div id='game-code-input-left'>
                <input autoFocus id='game-code-input' value={gameCode} onChange={e=>setGameCode(e.target.value)} type='text' placeholder='code' name='game-code' width='5'/>
            </div>
            <div id='game-code-input-right'>
                <button className='game-code-button' type='submit'>Join Game</button>
            </div>
        </form>
    )
}

function goTo(location) {
    window.location.href='/'+location;
}
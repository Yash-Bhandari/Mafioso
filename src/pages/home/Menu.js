import React, {useState} from 'react';
import './Home.css';

const baseUrl = 'http://localhost:3000/';

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
        //Checking to see if backend is online and game is set up
        fetch(props.backend+gameCode)
            .catch(() => alert('Please wait while the server spools up.'))
            .then(response => {
                if (response.status !== 200)
                    throw new Error('Game not found');
                else
                    goTo(gameCode);
            }).catch(err => alert('That is not a valid game code'))
    }
    return (
        <form id='game-code' onSubmit={e=>joinGame(e)}>
            <div id='game-code-input-left'>
                <input autoFocus id='game-code-input' value={gameCode} onChange={e=>setGameCode(e.target.value.toUpperCase())} type='text' placeholder='code' name='game-code' width='5'/>
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
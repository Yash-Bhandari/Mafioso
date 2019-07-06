import React from 'react';
import Home from './pages/home/Home.js';
import Create from './pages/create/Create.js';
import Join from './pages/join/Join.js';

export default class App extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            screen: 'home',
            backend: 'http://localhost:8080/mafioso'    
        };
        this.goTo = this.goTo.bind(this);
    }

    render(props){
        switch(this.state.screen) {
            case 'home':
                return <Home goTo={this.goTo} backend={this.state.backend}/>            
            case 'create':
                return <Create goTo={this.goTo} backend={this.state.backend}/>
            case 'join':
                return <Join goTo={this.goTo}/>
        }
    }

    goTo(newScreen) {
        this.setState({screen: newScreen});
    }
}
import React from 'react';
import Home from './pages/home/Home.js';
import Create from './pages/create/Create.js';

export default class App extends React.Component{
    constructor(props){
        super(props);
        this.state = {screen: 'home'};
        this.goTo = this.goTo.bind(this);
    }

    render(props){
        switch(this.state.screen) {
            case 'home':
                return <Home/>            
            case 'create':
                return <Create/>
        }
    }

    goTo(newScreen) {
        this.setState({screen: newScreen});
    }
}
import React from 'react';
import Home from './pages/home/Home.js';
import Create from './pages/create/Create.js';
import Join from './pages/join/Join.js';
import {BrowserRouter as Router, Route, Link, Switch} from 'react-browser-router';

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
        return (
        <Router> 
            <Switch>
                <Route exact path='/' component={Home}/>
                <Route path='/create' component={Create}/>
                <Route path='/:gameCode' component={Join}/>
            </Switch>
        </Router>
        )
    }

    goTo(newScreen) {
        this.setState({screen: newScreen});
    }
}
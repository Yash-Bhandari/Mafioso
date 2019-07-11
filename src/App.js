import React from 'react';
import Home from './pages/home/Home.js';
import Create from './pages/create/Create.js';
import Play from './pages/play/Play.js';
import {BrowserRouter as Router, Route, Switch} from 'react-browser-router';

let backend = 'https://mafioso-app.herokuapp.com/mafioso/'  

export default function App(props){
    return (
        <Router> 
            <Switch>
                <Route exact path='/' render={(props)=><Home backend={backend} {...props}/>}/>
                <Route path='/host' render={(props)=><Create backend={backend} {...props}/>}/>
                <Route path='/:gameCode' render={(props)=><Play backend={backend} {...props}/>}/>
            </Switch>
        </Router>
    )
}
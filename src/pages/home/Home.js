import React, {useEffect} from 'react';
import logo from './mafioso-logo.svg';
import Menu from './Menu';
import './Home.css'


export default function Home(props) {
    useEffect(()=>fetch(props.backend), [])
    return (
        <div>
            <img id="logo" src={logo}></img>
            <Menu goTo={props.goTo} backend={props.backend}/>
        </div>
    )
}

function logoHeader(props) {
    let width = window.innerWidth;

    return (
        <img></img>
    )
}
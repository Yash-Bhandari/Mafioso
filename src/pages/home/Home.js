import React from 'react';
import logo from './mafioso-logo.svg';
import Menu from './Menu';
import './Home.css'


export default function Home(props) {
    return (
        <div>
            <img id="logo" src={logo}></img>
            <Menu />
        </div>
    )
}
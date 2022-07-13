import React from 'react'
import './Navbar.scss'

function Navbar() {
    return (
        <div className="topnav">
            <a className="active" href="#home">ReactFlix</a>
            <a href="#news">News</a>
            <a href="#contact">Contact</a>
            <a href="#about">About</a>
        </div>
    )
}

export default Navbar
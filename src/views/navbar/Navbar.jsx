import React from 'react'
import { Link } from 'react-router-dom'
import './Navbar.scss'


function Navbar() {
    return (
        <div className="topnav">
            <Link to='/' className="active">Film Website</Link>
            <Link to="/favorites">Favorites</Link>
            <Link to='/contact'>Contact</Link>
        </div>
    )
}

export default Navbar
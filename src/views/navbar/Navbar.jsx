import React from 'react'
import { Link } from 'react-router-dom'
import { Global } from '../../static/global'
import './Navbar.scss'
//import LanguageSwitcher from '../../components/LanguageSwitcher/LanguageSwitcher'



function Navbar() {
    const changePage = (name) => {
        Global.pageName = name;
        console.log(name)
    }
    return (
        <div className='navbar'>
            <div className="topnav">
                <Link to='/' onClick={() => changePage("content")} className="active">Film Website</Link>
                <Link to="/favorites" onClick={() => changePage("favorites")} >Favorites</Link>
                <Link to='/contact' onClick={() => changePage("contact")} >Contact</Link>
            </div>
            <div className='lang-menu'>
                
                
            </div>
        </div>
    )
}

export default Navbar
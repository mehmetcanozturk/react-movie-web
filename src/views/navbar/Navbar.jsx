import React from 'react'
import { Link } from 'react-router-dom'
import { Global } from '../../static/global'
import './Navbar.scss'
//import LanguageSwitcher from '../../components/LanguageSwitcher/LanguageSwitcher'
import Logo from '../../assets/logo/logo.png'



function Navbar() {
    const changePage = (name) => {
        Global.pageName = name;
        console.log(name)
    }
    return (
        <div className='navbar'>
            <div className="topnav">
                <Link to='/' onClick={() => changePage("content")} className="active">
                    <div className='logo-container'>
                        <img src={Logo} alt="" />
                    </div>
                </Link>
                <Link className='navbar-link' to="/favorites" onClick={() => changePage("favorites")} >Favorites</Link>
                <Link className='navbar-link' to='/contact' onClick={() => changePage("contact")} >Contact</Link>
            </div>
            <div className='lang-menu'>


            </div>
        </div>
    )
}

export default Navbar
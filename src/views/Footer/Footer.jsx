import React from 'react'
import { Link } from 'react-router-dom';
import logo from '../../assets/logo/logo.png';
import { Global } from '../../static/global';
import './Footer.scss';
import { AiFillGithub, AiFillLinkedin, AiFillMail } from 'react-icons/ai';
import { GoRepo } from 'react-icons/go';

function Footer() {
  const changePage = (name) => {
    Global.pageName = name;
    console.log(name)
  }
  return (
    <div className='footer-container'>
      <div className='footer-image'>
        <div className='logo-container'>
          <Link to='/' onClick={() => changePage("content")} className="active">
            <img src={logo} alt="" />
          </Link>
        </div>
      </div>
      <div className='footer-content'>

        <div className='detail-title'>
          Made By <span><a href="https://github.com/mehmetcanozturk">XLein</a></span>
          <div className='social-media'>
            <a className='social-link' href="https://github.com/mehmetcanozturk/react-movie-web" target="_blank" rel="noopener noreferrer"><GoRepo size='18px' /></a>
            <a className='social-link' href="https://github.com/mehmetcanozturk" target="_blank" rel="noopener noreferrer"><AiFillGithub size='20px' /></a>
            <a className='social-link' href="https://www.linkedin.com/in/mcannozturk/" target="_blank" rel="noopener noreferrer"><AiFillLinkedin size='20px' /></a>
            <a className='social-link' href="mailto:info.mcanozturk@gmail.com" target="_blank" rel="noopener noreferrer"><AiFillMail size='20px' /></a>
          </div>
        </div>

      </div>
    </div>
  )
}

export default Footer
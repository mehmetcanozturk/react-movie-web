import React from 'react';
import '../Contact/Contact.scss';
import logo from '../../assets/logo/logo.png';
import { AiFillGithub, AiFillLinkedin, AiFillMail } from 'react-icons/ai';
import { GoRepo } from 'react-icons/go';

function Contact() {
  return (
    <>
      <div className='contact-container'>
        <div className='contact-header'>
          <img src={logo} alt="" />
          <h1 >XLein Movie</h1>
        </div>
        <div className='contact-content'>
          <h4>Hi Dear,</h4>
          This is my first react website project. Inspired by netflix web design.
          <a href="https://www.themoviedb.org/documentation/api">MovieDb API</a> is used in this project.

          <div className='social-media'>
            <a className='social-link' href="https://github.com/mehmetcanozturk/react-movie-web" target="_blank" rel="noopener noreferrer"><GoRepo size='28px' /></a>
            <a className='social-link' href="https://github.com/mehmetcanozturk" target="_blank" rel="noopener noreferrer"><AiFillGithub size='30px' /></a>
            <a className='social-link' href="https://www.linkedin.com/in/mcannozturk/" target="_blank" rel="noopener noreferrer"><AiFillLinkedin size='30px' /></a>
            <a className='social-link' href="mailto:info.mcanozturk@gmail.com" target="_blank" rel="noopener noreferrer"><AiFillMail size='30px' /></a>
          </div>
        </div>
      </div>

    </>
  )
}

export default Contact
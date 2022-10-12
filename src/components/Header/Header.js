
import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css'
import logo from './logo.png'

const Header = () => {
    return (
        <nav className='header'>
            <div className='logo-container'>
                <img src={logo} alt="" />
                <h1>Quizzz Pro</h1>
            </div>
            <div className='link-container'>
                <Link to='/' className='n-link' >Home</Link>
                <Link to='/topics' className='n-link'>Topics</Link>
                <Link to='/blog' className='n-link'>Blog</Link>
                <Link to='/statistics' className='n-link'>Statistics</Link>
            </div>
        </nav>
    );
};

export default Header;<h2>this is header</h2>
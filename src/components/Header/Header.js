import { logDOM } from '@testing-library/react';
import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css'
import logo from './logo.png'

const Header = () => {
    return (
        <nav>
            <div className='logo-container'>
                <img src={logo} alt="" />
                <h1>Quizzz Pro</h1>
            </div>
            <div className='link-container'>
                <Link to='/'>Home</Link>
                <Link to='/topics'>Topics</Link>
                <Link to='/blog'>Blog</Link>
                <Link to='/statistics'>Statistics</Link>
            </div>
        </nav>
    );
};

export default Header;<h2>this is header</h2>
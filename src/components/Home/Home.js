import React from 'react';
import Topics from '../Topics/Topics';
import logo from './quiz.jpg'
import './Home.css'

const Home = () => {
    return (
        <div>
            <div className='banner'>
                <img src={logo} alt="" />
                <h1>“Isn’t life a collection of weird quizzes with no answers to half the questions?”</h1>
            </div>
        <Topics></Topics>
        </div>
    );
};

export default Home;
import React from 'react';
import { Link } from 'react-router-dom';
import './Topic.css'

const Topic = ({topic}) => {
    const {id,name,logo,total} = topic;
    return (
        <div className='topics'>
            <img src={logo} alt="" ></img>
            <h1>{name}</h1>
            <h4>Number of Quiz: {total}</h4>
            <button> <Link to={`/topics/${id}`}>Start Quiz</Link> </button>
        </div>
    );
};

export default Topic;
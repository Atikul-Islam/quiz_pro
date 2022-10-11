import React from 'react';
import './Topic.css'

const Topic = ({topic}) => {
    console.log(topic)
    const {name,logo,total} = topic;
    return (
        <div className='topics'>
            <img src={logo} alt="" ></img>
            <h1>{name}</h1>
            <h4>Number of Quiz: {total}</h4>
            <button>Start Quiz</button>
        </div>
    );
};

export default Topic;
import React from 'react';
import { useLoaderData } from 'react-router-dom';
import { LineChart, Line, CartesianGrid, XAxis, YAxis } from 'recharts';
import './Statistics.css'

const Statistics = () => {
    const topics = useLoaderData();
    return (
        <div className='chart-container'>
            <h2>Line Chart of Topics:</h2>
            <LineChart width={300} height={300} data={topics.data}>
            <Line type="monotone" dataKey="total" stroke="#8884d8" />
            <CartesianGrid stroke="#ccc" />
            <XAxis dataKey="name" />
            <YAxis />
            </LineChart>
        </div>
    );
};

export default Statistics;<h2>this is statistics</h2>
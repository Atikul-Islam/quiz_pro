import React from 'react';
import { useLoaderData } from 'react-router-dom';

const Quiz = () => {
    const quiz = useLoaderData();

    return (
        <div>
            <h2>{quiz.data.name}</h2>
            <div>
                {quiz.data.questions.map(qus => console.log(qus))}
            </div>
        </div>
    );
};

export default Quiz;
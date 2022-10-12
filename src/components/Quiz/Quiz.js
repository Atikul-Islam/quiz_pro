import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Question from '../Question/Question';

const Quiz = () => {
    const quiz = useLoaderData();

    return (
        <div>
            <h2>{quiz.data.name}</h2>
            <div>
                {quiz.data.questions.map(qus => <Question 
                key={qus.id}
                qus={qus}
                ></Question> )}
            </div>
        </div>
    );
};

export default Quiz;
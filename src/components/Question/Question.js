import React from 'react';
import Option from '../Option/Option';

const Question = ({qus}) => {
    // console.log(qus)
    return (
        <div>
            <h2>{qus.question}</h2>
            {
                qus.options.map(opt => <Option 
                opt={opt}
                ></Option>)
            }
        </div>
    );
};

export default Question;
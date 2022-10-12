import React from 'react';
import { toast, ToastContainer } from 'react-toastify';
import Option from '../Option/Option';
import 'react-toastify/dist/ReactToastify.css';

const Question = ({qus}) => {
    const {correctAnswer,options}=qus;
    const showToast = () =>{
        toast(`${correctAnswer}`,{
            position: 'top-center'
        });
    }
    return (
        <div>
            <h2>{qus.question}</h2>
            {
                options.map(opt => <Option 
                opt={opt}
                ca={correctAnswer}
                ></Option>)
            }
            <br />
            <button onClick={showToast}>see answer</button>
            <ToastContainer />
        </div>
    );
};

export default Question;
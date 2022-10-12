import React from 'react';
import { toast, ToastContainer } from 'react-toastify';
import Option from '../Option/Option';
import 'react-toastify/dist/ReactToastify.css';
import { EyeIcon } from '@heroicons/react/24/solid'
import './Question.css'

const Question = ({qus}) => {
    const {correctAnswer,options}=qus;
    const showToast = () =>{
        toast(`${correctAnswer}`,{
            position: 'top-center'
        });
    }
    
    return (
        <div className='qus-container'>
            <div className='qus'>
                <h2>{qus.question}</h2>
                <EyeIcon onClick={showToast} className="eye"/>
            </div>
            {
                options.map(opt => <Option 
                opt={opt}
                correctAnswer={correctAnswer}
                ></Option>)
            }
            <br />
            <ToastContainer />
        </div>
    );
};

export default Question;
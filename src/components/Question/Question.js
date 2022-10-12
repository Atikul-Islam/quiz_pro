import React from 'react';
import { toast, ToastContainer } from 'react-toastify';
import Option from '../Option/Option';

const Question = ({qus}) => {
    const {correctAnswer,options}=qus;
    const showToast = () =>{
        return toast({correctAnswer},{
            position:"top-center"
        });
    }
    console.log(qus)
    return (
        <div>
            <h2>{qus.question}</h2>
            {
                options.map(opt => <Option 
                opt={opt}
                ></Option>)
            }
            <br />
            <button onClick={showToast}>see answer</button>
            <ToastContainer />
        </div>
    );
};

export default Question;
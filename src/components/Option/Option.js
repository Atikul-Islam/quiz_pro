import React from 'react';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './Option.css'

const Option = ({opt,correctAnswer}) => {
    const showToast = () =>{
        if(correctAnswer===opt){
            toast('Answer is correct',{
                position:'top-center'
            })
        }
        else{
            toast('Answer is wrong',{
                position:'top-center'
            })
        }
   

    }

    return (
        <div>
            <div onClick={showToast} className='option'>
                <input type="radio" onClick={showToast} id={opt} name="fav_language" value={opt}/>
                <label onClick={showToast} htmlFor="html">{opt}</label>
            </div> 

            <ToastContainer />
        </div>
        
    );
};

export default Option;
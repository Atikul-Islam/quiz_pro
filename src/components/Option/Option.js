import React from 'react';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Option = ({opt,ca}) => {
    const showToast = () =>{
        if(ca===opt){
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
            <input type="radio" onClick={showToast} id={opt} name="fav_language" value={opt}/>
            <label onClick={showToast} htmlFor="html">{opt}</label> 

            <ToastContainer />
        </div>
        
    );
};

export default Option;
import React from 'react';
import { toast, ToastContainer } from 'react-toastify';

const Option = ({opt}) => {

    const showToast = () =>{
        toast()

    }
    // const{opt}=opt;
    // console.log(opt)
    return (
        <div>
            <input type="radio" id="html" name="fav_language" value={opt}/>
            <label onClick={showToast} htmlFor="html">{opt}</label> 

            <ToastContainer />
        </div>
        
    );
};

export default Option;
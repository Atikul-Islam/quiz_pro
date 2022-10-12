import React from 'react';

const Option = ({opt}) => {
    // const{opt}=opt;
    // console.log(opt)
    return (
        <div>
            <input type="radio" id="html" name="fav_language" value={opt}/>
            <label htmlFor="html">{opt}</label> 
        </div>
    );
};

export default Option;
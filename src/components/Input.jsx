import React from 'react';
import './Input.css';

const Input = (props) => {
    return (
        <label className='input'>
            {props.children}
        </label>
    );
}

export default Input;

//Maybe obsolete :O

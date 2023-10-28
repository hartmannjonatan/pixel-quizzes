import React from 'react';
import './button-style.css'

const Button = ({children, onClick, disabled, type}) => {
    return (
        <button className='btn font-button-medium' onClick={() => {onClick()}} disabled={disabled} type={type}>{children}</button>
    );
}

export default Button;

import React from 'react';
import './button-style.css'
import icon_back from '../../assets/icons/previous.svg'
import { useNavigate } from 'react-router-dom';

const Button = ({children, onClick, disabled, type, back_to='/'}) => {
    const navigate = useNavigate()
    return (
        <>
            {type != 'back' ?
                <button className='btn font-button-medium' onClick={() => {onClick()}} disabled={disabled} type={type}>{children}</button>
            :
                <button onClick={() => {navigate(back_to)}} className='btn-back'><img src={icon_back} alt="Voltar" /></button>
            }
        </>
    );
}

export default Button;

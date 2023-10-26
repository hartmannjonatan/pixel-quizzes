import React, { useState } from 'react';
import hide_img from '../../assets/icons/hide.svg'
import show_img from '../../assets/icons/show.svg'
import './input-style.css'

const Input = ({type, placeholder, required, onChange, isValid, onChangeValidation, validationMessage, value, name}) => {
    const [showPassword, setShowPassword] = useState(false)
    const passwordType = showPassword ? 'text' : 'password'

    function handleBlur(value){
        if(type=='email'){ // Para o sistema em questão só é necessário validar o email
            var re_email = /\S+@\S+\.\S+/
            onChangeValidation(name, re_email.test(value))
        }
    }

    return (
        <div className='inputGroup'>
            <input onBlur={(e) => {handleBlur(e.target.value)}} className={isValid ? 'font-paragraph-large input' : 'font-paragraph-large input unvalidated'} onChange={onChange} type={type=='password' ? passwordType : type} name={name} required={required} value={value} placeholder={placeholder} />
            {type!='password' ? '' :
                <button type='button' onClick={() => {setShowPassword(s => !s)}} className='btn-visibility-password'>{showPassword ? <img src={hide_img} alt="Hide password" />: <img src={show_img} alt="Show password" />}</button>
            }
            {isValid ? '' :<span className='validation-error-message color-error font-paragraph-small text-center'>{validationMessage}</span>}
        </div>
    );
}

export default Input;

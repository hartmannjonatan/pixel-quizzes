import React, { useState } from 'react';
import hide_img from '../../assets/icons/hide.svg'
import show_img from '../../assets/icons/show.svg'
import search_img from '../../assets/icons/search.svg'
import './input-style.css'

const Input = ({className='', type, placeholder, required, onChange, isValid, onChangeValidation, validationMessage, value, name}) => {
    const [showPassword, setShowPassword] = useState(false)
    const passwordType = showPassword ? 'text' : 'password'

    function handleBlur(value){
        if(required && value.length==0){
            onChangeValidation(name, false)
        } else{
            switch (type) {
                case 'email':
                    var re_email = /\S+@\S+\.\S+/
                    onChangeValidation(name, re_email.test(value))
                    break;
                default:
                    onChangeValidation(name, true)
                    break;
            }
        }
    }

    return (
        <div className={'inputGroup '+className}>
            <input onBlur={(e) => {onChangeValidation == null ? "" : handleBlur(e.target.value)}} className={isValid ? 'font-paragraph-large input' : 'font-paragraph-large input unvalidated'} onChange={onChange} type={type=='password' ? passwordType : type} name={name} required={required} value={value} placeholder={placeholder} />
            {type!='password' ? '' :
                <button type='button' onClick={() => {setShowPassword(s => !s)}} className='input-icon btn-visibility-password'>{showPassword ? <img src={hide_img} alt="Hide password" />: <img src={show_img} alt="Show password" />}</button>
            }
            {type!='search' ? '':
                <span className='input-icon'><img src={search_img} alt="Search" /></span>
            }
            {isValid ? '' :<span className='validation-error-message color-error font-paragraph-small text-center'>{validationMessage}</span>}
        </div>
    );
}

export default Input;

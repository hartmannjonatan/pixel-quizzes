import React, { useState } from 'react';
import Input from '../../components/Input/Input';
import Button from '../../components/Button/Button';
import { useNavigate } from 'react-router-dom';

const FormRecuperarSenha = () => {
    const navigate = useNavigate()
    const [data, setData] = useState({
        'email': ''
    })

    const [validation, setValidation] = useState({
        'email': true
    })

    const enabled = Object.values(validation).every((every) => every === true);

    function handleInputChange(input, value){
        setData({
            ...data,
            [input]: value
        })
    }

    function handleInputValidationChange(input, isValid){
        setValidation({
            ...validation,
            [input]: isValid
        })
    }

    function handleFormSubmit(){
        if(Object.values(data).every((every) => every.length > 0)){
            // Aqui teria o processamento do cadastro caso fosse necessário
            navigate('/')
        } else{
            const valid = {
                'email': true
            }
            Object.keys(data).forEach(input => {
                if(data[input].length == 0){
                    valid[input] = false
                }
            });
            setValidation(valid)
        }
    }

    return (
        <form method='post'>
            <Input type={'email'} name={'email'} required={true} placeholder={'E-mail'} value={data.email} validationMessage={'Este campo deve ser um email no formato: fulano@mail.com'} isValid={validation.email} onChangeValidation={handleInputValidationChange} onChange={(e) => {handleInputChange('email', e.target.value)}}/>
            <Button disabled={!enabled} type={'button'} onClick={handleFormSubmit}>Enviar e-mail</Button>
        </form>
    );
}

export default FormRecuperarSenha;

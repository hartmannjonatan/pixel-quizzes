import React, { useState } from 'react';
import Input from '../../components/Input/Input';
import Button from '../../components/Button/Button';
import { Link, useNavigate } from 'react-router-dom';

const FormCadastro = () => {
    const navigate = useNavigate()

    const [data, setData] = useState({
        'name': '',
        'email': '',
        'password': ''
    })

    const [validation, setValidation] = useState({
        'name': true,
        'email': true,
        'password': true
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
        // Aqui teria o processamento do cadastro caso fosse necessário
        navigate('/')
    }

    return (
        <form className='text-center' method='post'>
            <Input type={'text'} name={"name"} placeholder={'Nome'} isValid={validation.name} required={true} validationMessage={'Este campo é obrigatório!'} value={data.name} onChange={(e)=>{handleInputChange('name', e.target.value)}} onChangeValidation={handleInputValidationChange} />
            <Input type={'email'} name={"email"} placeholder={'E-mail'} isValid={validation.email} required={true} validationMessage={'Este campo deve ser um email no formato: fulano@mail.com'} value={data.email} onChange={(e)=>{handleInputChange('email', e.target.value)}} onChangeValidation={handleInputValidationChange}/>
            <Input type={'password'} name={'password'} placeholder={'Senha'} isValid={validation.password} required={true} validationMessage={'Este campo é obrigatório!'} value={data.password} onChange={(e)=>{handleInputChange('password', e.target.value)}} onChangeValidation={handleInputValidationChange} />
            <Button type={'button'} onClick={handleFormSubmit} disabled={!enabled} >Cadastre-se</Button>
            <Link className='font-button-medium color-dark text-center link' to={'/'} >Entrar</Link>
        </form>
    );
}

export default FormCadastro;

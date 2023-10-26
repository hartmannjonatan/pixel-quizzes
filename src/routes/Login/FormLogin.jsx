import React, { useContext, useState } from 'react';
import Input from '../../components/Input/Input';
import { Link } from 'react-router-dom';
import Button from '../../components/Button/Button';
import { UserDispatchContext } from '../../components/User/userContext';

const FormLogin = () => {
    const dispatch = useContext(UserDispatchContext)

    function handleLoginClick(){
      dispatch({
        type: 'login',
        user: {
          logged: true
        }
      });
    }

    const [data, setData] = useState({
        'email': '',
        'password': ''
    })

    const [validation, setValidation] = useState({
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
        console.log('submit')
    }

    return (
        <form method="post">
            <Input type={'email'} name={'email'} placeholder={'E-mail'} value={data.email} validationMessage={'Este campo deve ser um email no formato: fulano@mail.com'} isValid={validation.email} onChangeValidation={handleInputValidationChange} onChange={(e) => {handleInputChange('email', e.target.value)}}/>
            <Input type={'password'} name={'password'} placeholder={'Password'} value={data.password} validationMessage={''} isValid={validation.password} onChangeValidation={handleInputValidationChange} onChange={(e) => {handleInputChange('password', e.target.value)}}/>
            <Link className='font-button-medium color-dark text-center link' to={'/recuperar-senha'} >Esqueceu a senha?</Link>
            <Button type={'button'} onClick={handleFormSubmit} disabled={!enabled}>Entrar</Button>
            <Link className='font-button-medium color-dark text-center link' to={'/cadastro'} >Criar uma conta</Link>
        </form>
    );
}

export default FormLogin;

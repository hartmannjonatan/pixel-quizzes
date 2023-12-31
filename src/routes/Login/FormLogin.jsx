import React, { useContext, useState } from 'react';
import Input from '../../components/Input/Input';
import { Link } from 'react-router-dom';
import Button from '../../components/Button/Button';
import { UserDispatchContext } from '../../components/User/userContext';
import axios from 'axios';

const FormLogin = () => {
    const dispatch = useContext(UserDispatchContext)

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
        if(Object.values(data).every((every) => every.length > 0)){
            axios({
                method: "get",
                url: "https://my-json-server.typicode.com/higorpo/trilha-dev-json-server/profile"
            }).then(function (response) {
                dispatch({
                    type: 'login',
                    user: {
                    logged: true,
                    name: response.data.name,
                    profile_image: response.data.profile_image,
                    email: response.data.email,
                    password_changed_date: response.data.password_changed_date
                    }
                });
            });
        } else{
            const valid = {
                'email': true,
                'password': true
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
        <form className='text-center' method="post">
            <Input type={'email'} name={'email'} required={true} placeholder={'E-mail'} value={data.email} validationMessage={'Este campo deve ser um email no formato: fulano@mail.com'} isValid={validation.email} onChangeValidation={handleInputValidationChange} onChange={(e) => {handleInputChange('email', e.target.value)}}/>
            <Input type={'password'} name={'password'} required={true} placeholder={'Password'} value={data.password} validationMessage={'Este campo é obrigatório!'} isValid={validation.password} onChangeValidation={handleInputValidationChange} onChange={(e) => {handleInputChange('password', e.target.value)}}/>
            <Link className='font-button-medium color-dark text-center link' to={'/recuperar-senha'} >Esqueceu a senha?</Link>
            <Button type={'button'} onClick={handleFormSubmit} disabled={!enabled}>Entrar</Button>
            <Link className='font-button-medium color-dark text-center link' to={'/cadastro'} >Criar uma conta</Link>
        </form>
    );
}

export default FormLogin;

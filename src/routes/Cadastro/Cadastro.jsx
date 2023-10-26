import React from 'react';
import FormCadastro from './FormCadastro';
import './cadastro-style.css'

const Cadastro = () => {
    return (
        <div className="container">
            <div className="form-cadastro">
                <h1 className="title text-center color-dark">Cadastre-se</h1>
                <p className="subtitle text-center font-paragraph-small color-dark-gray">Crie uma conta gratuitamente</p>
                <FormCadastro />
            </div>
        </div>
    );
}

export default Cadastro;

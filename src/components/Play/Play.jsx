import React, { useState } from 'react';
import './play-style.css';
import Options from '../Options/Option';
import Button from '../Button/Button';

const Play = ({perguntas, setPontuation, setState}) => {
    const [indexPergunta, setIndexPergunta] = useState(0)
    const [answered, setAnswered] = useState(false)
    const pergunta = perguntas[indexPergunta]
    const total_perguntas = perguntas.length

    

    function next(){
        if(indexPergunta < total_perguntas-1){
            setAnswered(false)
            setIndexPergunta(n => n+1)
        }else{
            setState('feedback')
        }
    }

    return (
        <div className='play'>
            <div className="index text-center">
                <p className="font-paragraph-large color-dark">{indexPergunta+1} de {total_perguntas}</p>
            </div>
            <div className="question">
                <h5 className="color-dark">{pergunta.question_text}</h5>
            </div>
            <div className="banner text-center">
                <img src={pergunta.banner_image} alt="Banner da pergunta" />
            </div>
            <Options key={indexPergunta} options={pergunta.answers} setAnswered={setAnswered} correct_answer={pergunta.correct_answer_index} addCorrect={() => {setPontuation(n => n+1)}} />
            {answered ?
                <div className="continue-button">
                    <Button type={'button'} onClick={() => {next()}}>Continuar</Button>
                </div>
            : ''}
        </div>
    );
}

export default Play;

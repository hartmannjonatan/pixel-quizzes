import React from 'react';
import { useNavigate } from 'react-router-dom';
import './card-style.css'

const Card = ({className, quiz, historico=false}) => {
    const navigate = useNavigate()

    const answered_date = quiz.answered_date != null ? formatarData(quiz.answered_date) : null

    function formatarData(dataString) {
        const data = new Date(dataString);
        const dia = data.getDate().toString().padStart(2, '0');
        const mes = (data.getMonth() + 1).toString().padStart(2, '0');
        const ano = data.getFullYear().toString().slice(-2);
        return `${dia}/${mes}/${ano}`;
    }

    return (
        <div onClick={() => {navigate("/quiz/"+quiz.id)}} className={'card '+className}>
            <div className="card-image">
                <img src={quiz.banner_image} alt="Banner do quiz" />
                <div className={quiz.difficulty == 'easy' ? "card-price font-button-small color-white background-secondary" : "card-price font-button-small color-white background-error"}>{quiz.difficulty == 'easy' ? "FÁCIL" : "DIFÍCIL"}</div>
            </div>
            <div className="card-content">
                {quiz.is_answered && historico ?
                    <div className="answered">
                        <p className={quiz.correct_answers_count > quiz.questions_count/2 ? 'font-paragraph-small color-success' : 'font-paragraph-small color-error'}>Você acertou {quiz.correct_answers_count} de {quiz.questions_count}</p>
                        <p className='font-paragraph-small color-dark-gray'>Em {answered_date}</p>
                    </div>
                : ""}
                <h4 className='color-dark'>{quiz.title}</h4>
                <p className='font-paragraph-medium'>{quiz.short_description}</p>
            </div>
        </div>
    );
}

export default Card;

import React, { useState, useEffect } from 'react';
import ProtectedRoute from '../ProtectedRoute';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import Button from '../../components/Button/Button';
import img_description from "../../assets/images/Illustration.png"
import './quiz-style.css'

const Quiz = () => {
    const { id } = useParams()
    const [quiz, setQuiz] = useState({})
    const [state, setState] = useState("view")

    useEffect(() => {
        let data = {}
        axios({
          method: "get",
          url: "https://my-json-server.typicode.com/higorpo/trilha-dev-json-server/quizzes/"+id
        }).then(function (response) {
            data = response.data
            axios({
                method: "get",
                url: "https://my-json-server.typicode.com/higorpo/trilha-dev-json-server/questions/"+id
            }).then(function (response) {
                data["perguntas"]= response.data.data
                setQuiz(data)
            });
        });
      }, [])

    return (
        <ProtectedRoute redirectPath='/login'>
            <nav>
                <Button type={"back"} back_to={state == 'play' ? '/quiz/'+id : '/'} onClick={() => {setState("view")}}/>
            </nav>
            {state == 'view' ?
                <div className="container-fluid">
                    <div className="view">
                        <h2 className="color-dark text-center">{quiz.title}</h2>
                        <div className="text-center">
                            <img src={img_description} alt="Ilustração" />
                        </div>
                        <div className='difficulty'>
                            <div className={quiz.difficulty == 'easy' ? "font-button-small color-white background-secondary" : "card-price font-button-small color-white background-error"}>{quiz.difficulty == 'easy' ? "FÁCIL" : "DIFÍCIL"}</div>
                        </div>
                        <h5 className="color-dark">Sobre o quiz</h5>
                        <p className="description font-paragraph-medium color-dark-gray">{quiz.description}</p>
                        <h5 className="color-dark">Quantidade de perguntas</h5>
                        <p className="description font-paragraph-medium color-dark-gray">{quiz.questions_count}</p>
                        <Button type={"button"} onClick={() => {setState("play")}}>Fazer tentativa</Button>
                    </div>
                </div>
            :
                ""
            }
        </ProtectedRoute>
    );
}

export default Quiz;

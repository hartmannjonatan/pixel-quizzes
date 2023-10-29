import React, { useState, useEffect } from 'react';
import ProtectedRoute from '../ProtectedRoute';
import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';
import Button from '../../components/Button/Button';
import img_description from "../../assets/images/Illustration.png"
import './quiz-style.css'
import icon_not_found from '../../assets/images/Cool Kids Standing.png'
import Play from '../../components/Play/Play';

const Quiz = () => {
    const { id } = useParams()
    const [quiz, setQuiz] = useState({})
    const [state, setState] = useState("loading")
    const [pontuation, setPontuation] = useState(0)
    const navigate = useNavigate()
    

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
                setState('view')
            })
        }).catch(error => {
            setQuiz({})
        });
      }, [])

    function View(){
        return(
            <div className="view">
                <h2 className="color-dark text-center">{quiz.title}</h2>
                <div className="text-center">
                    <img src={img_description} alt="Ilustração" />
                </div>
                <div className='difficulty'>
                    <div className={quiz.difficulty == 'easy' ? "font-button-small color-white background-secondary" : "font-button-small color-white background-error"}>{quiz.difficulty == 'easy' ? "FÁCIL" : "DIFÍCIL"}</div>
                </div>
                <h5 className="color-dark">Sobre o quiz</h5>
                <p className="description font-paragraph-medium color-dark-gray">{quiz.description}</p>
                <h5 className="color-dark">Quantidade de perguntas</h5>
                <p className="description font-paragraph-medium color-dark-gray">{quiz.questions_count}</p>
                <Button type={"button"} onClick={() => {setState("play")}}>Fazer tentativa</Button>
            </div>
        )
    }

    function Feedback(){
        return(
            <div className="feedback text-center">
                <h5 className="color-dark">Resultados</h5>
                <h1 className='color-dark'>{pontuation}/{quiz.questions_count}</h1>
                <h5 className="color-dark">{pontuation == quiz.questions_count ? "Você é um mestre" : "Quase lá"}</h5>
                <p className="color-dark font-paragraph-large">{pontuation == quiz.questions_count ? "Você concluiu o quiz com sucesso e acertou todas as perguntas. Você é realmente muito bom!" : "Continue estudando e tentando, uma hora você vai gabaritar! Eu acredito em você!"}</p>
                <Button type={'button'} onClick={() => {navigate('/')}}>Finalizar</Button>
            </div>
        )
    }

    return (
        <ProtectedRoute redirectPath='/login'>
            <nav className='not-line-nav'>
                <Button type={"back"} back_to={state == 'play' ? '/quiz/'+id : '/'} onClick={() => {setState("view")}}/>
            </nav>
            <div className="container-fluid">
                {quiz != {} && state != 'loading' ?
                    (state == 'view' ? 
                        <View />
                    : (state == 'feedback' ?
                        <Feedback /> 
                    :<Play perguntas={quiz.perguntas} setPontuation={setPontuation} setState={setState}/>)
                    )
                :
                    
                    <div className="not-found text-center">
                        <img src={icon_not_found} />
                        <h2 className="color-dark">Quiz não encontrado</h2>
                        <div>
                            <p className="font-paragraph-medium color-dark-gray">Não encontramos nenhum quiz com o id solicitado. Tente voltar para a página anterior e escolher um quiz existente.</p>
                        </div>
                    </div>
                }
            </div>
        </ProtectedRoute>
    );
}

export default Quiz;

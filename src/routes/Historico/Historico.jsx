import React, { useContext, useState, useEffect } from 'react';
import ProtectedRoute from '../ProtectedRoute';
import '../Home/home-style.css'
import './historico-style.css'
import axios from 'axios';
import Card from '../../components/Card/Card';
import icon_not_found from '../../assets/images/Cool Kids Standing.png'
import Button from '../../components/Button/Button';

export default function Historico(){
  const [quizes, setQuizes] = useState([])

  useEffect(() => {
    axios({
      method: "get",
      url: "https://my-json-server.typicode.com/higorpo/trilha-dev-json-server/quizzes?is_answered=true"
    }).then(function (response) {
        setQuizes(response.data)
    });
  }, [])

    return(
      <ProtectedRoute redirectPath='/login'>
        <nav>
          <div className='back-home'>
            <Button type={'back'} />
            <h2 className="color-dark">Seu histórico</h2>
          </div>
        </nav>
        {quizes.length > 0 ?
          <div className="content">
            {quizes.map(quiz => (
              <Card className={"flex-item"} quiz={quiz} historico/>
            ))}
          </div>
        :
          <div className="container">
              <div className="not-found text-center">
                <img src={icon_not_found} />
                <h2 className="color-dark">Você ainda não jogou nenhum quiz</h2>
                <div>
                  <p className="font-paragraph-medium color-dark-gray">Experimente jogar um de nossos quizes, se divirta e pratique seus conhecimentos!</p>
                </div>
              </div>
          </div>
        }
      </ProtectedRoute>
    )   
}
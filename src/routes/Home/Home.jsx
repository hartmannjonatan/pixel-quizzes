import React, { useContext, useState, useEffect } from 'react';
import ProtectedRoute from '../ProtectedRoute';
import { UserContext } from '../../components/User/userContext';
import './home-style.css'
import { Link } from 'react-router-dom';
import MenuTemas from '../../components/MenuTemas/MenuTemas';
import Input from '../../components/Input/Input'
import axios from 'axios';
import Card from '../../components/Card/Card';
import icon_not_found from '../../assets/images/Cool Kids Standing.png'

export default function Home(){
  const user = useContext(UserContext)
  const [temas, setTemas] = useState(null)
  const [quizes, setQuizes] = useState([])
  const [search, setSearch] = useState("")

  function handleSearch(input){
    setSearch(input)
  }

  useEffect(() => {
    axios({
      method: "get",
      url: "https://my-json-server.typicode.com/higorpo/trilha-dev-json-server/quizzes"
    }).then(function (response) {
        const data = new Set()
        response.data.forEach(element => {
          data.add(element.search)
        });
        setTemas(Array.from(data))
    });
  }, [])

  useEffect(() => {
    if(search != ""){
      axios({
        method: "get",
        url: "https://my-json-server.typicode.com/higorpo/trilha-dev-json-server/quizzes?search="+search
      }).then(function (response) {
          setQuizes(response.data)
      });
    } else{
      axios({
        method: "get",
        url: "https://my-json-server.typicode.com/higorpo/trilha-dev-json-server/quizzes"
      }).then(function (response) {
        setQuizes(response.data)
      });
    }
  }, [search]);

    return(
      <ProtectedRoute redirectPath='/login'>
        <nav>
          <div className="hello">
            <p className="font-paragraph-large color-dark">Olá,</p>
            <h2 className="color-dark">{user.name}</h2>
          </div>
          <div className="items">
            <div>
              <Link className='font-button-medium color-dark text-center link' to={'/historico'} >Histórico</Link>
            </div>
            <MenuTemas temas={temas} search={handleSearch}/>
            <Input className='inputSearch' isValid={true} name={'inputSearch'} placeholder={"Pesquisar quiz"} value={search} required={false} type={'search'} validationMessage={''} onChange={(e) => {handleSearch(e.target.value)}}/>
          </div>
        </nav>
        {quizes.length > 0 ?
          <div className="content">
            {quizes.map(quiz => (
              <Card className={"flex-item"} quiz={quiz}/>
            ))}
          </div>
        :
          <div className="container">
              <div className="not-found text-center">
                <img src={icon_not_found} />
                <h2 className="color-dark">Quiz não encontrado</h2>
                <div>
                  <p className="font-paragraph-medium color-dark-gray">Não encontramos nenhum quiz. Tente procurar usando palavras chaves diferentes...</p>
                </div>
              </div>
          </div>
        }
      </ProtectedRoute>
    )   
}
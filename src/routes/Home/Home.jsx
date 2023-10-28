import React, { useContext, useState, useEffect } from 'react';
import ProtectedRoute from '../ProtectedRoute';
import { UserContext } from '../../components/User/userContext';
import './home-style.css'
import { Link } from 'react-router-dom';
import MenuTemas from '../../components/MenuTemas/MenuTemas';
import Input from '../../components/Input/Input'
import axios from 'axios';

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
        console.log(response.data)
        setQuizes(response.data)
        const data = new Set()
        response.data.forEach(element => {
          data.add(element.search)
        });
        setTemas(Array.from(data))
    });
  }, []);

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
        <div className="content">
          {quizes.map(quiz => (
            <h1>{quiz.title}</h1>
          ))}
        </div>
      </ProtectedRoute>
    )   
}
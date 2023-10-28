import { React, useReducer } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import userReducer from '../components/User/userRedux';
import { UserContext, UserDispatchContext } from '../components/User/userContext';
import Home from './Home/Home';
import NotFound from './NotFound';
import Login from './Login/Login';
import Cadastro from './Cadastro/Cadastro';
import Historico from './Historico/Historico';
import RecuperarSenha from './RecuperarSenha/RecuperarSenha';
import Quiz from './Quiz';

function App(){
    const [user, dispatch] = useReducer(userReducer, {logged: false})
    return(
        <UserContext.Provider value={user}>
            <UserDispatchContext.Provider value={dispatch}>
                <BrowserRouter>
                    <Routes>
                        <Route path='/' element={<Home />}/>
                        <Route path='/login' element={<Login />} />
                        <Route path='/cadastro' element={<Cadastro />} />
                        <Route path='/historico' element={<Historico />} />
                        <Route path='/recuperar-senha' element={<RecuperarSenha />} />
                        <Route path='/quiz' element={<Quiz />} />
                        <Route path='*' element={<NotFound />} />
                    </Routes>
                </BrowserRouter>
            </UserDispatchContext.Provider>
        </UserContext.Provider>
    )
}

export default App;

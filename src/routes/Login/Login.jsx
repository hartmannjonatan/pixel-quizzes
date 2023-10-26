import { Navigate } from "react-router-dom"
import './login-style.css'
import FormLogin from "./FormLogin"
import { useContext } from "react"
import { UserContext } from "../../components/User/userContext"

export default function Login() {
    const user = useContext(UserContext)
    return (
      <>
          {user.logged ? <Navigate to={'/'}/> : 
          <div className="container">
            <div className="logo">
              <img src='/logo.png' alt="PixelQuizzes" />
              <h1 className="color-dark">PixelQuizzes</h1>
            </div>
            <div className="form-login">
              <h1 className="color-dark text-center">Entrar</h1>
              <FormLogin />
            </div>
          </div>
          }
      </>
    )
}


import { useContext, useState } from "react"
import { Navigate, redirect, useOutletContext } from "react-router-dom"
import { UserContext } from "../components/userContext"
import { UserDispatchContext } from "../components/userContext"

export default function Login() {
    const user = useContext(UserContext)
    const dispatch = useContext(UserDispatchContext)

    function handleLoginClick(){
      dispatch({
        type: 'login',
        user: {
          logged: true
        }
      });
    }
    
    return (
      <>
          {!user.logged ? <button onClick={handleLoginClick}>Login</button> : <Navigate to={'/'}/>}
      </>
    )
}


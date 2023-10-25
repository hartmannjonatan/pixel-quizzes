import React, { useContext } from 'react';
import ProtectedRoute from './ProtectedRoute';
import { UserContext, UserDispatchContext } from '../components/userContext';
import { useOutletContext } from 'react-router-dom';

export default function Home(){
  const dispatch = useContext(UserDispatchContext)

  function handleLogoutClick(){
    dispatch(
      {
        type: 'logout',
        user: {
          logged: false
        }
      }
    )
  }

    return(
      <ProtectedRoute redirectPath='/login'>
        <h1 className='color-dark'>Home</h1>
        <button onClick={handleLogoutClick}>Logout</button>
      </ProtectedRoute>
    )   
}
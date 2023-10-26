import React, { useContext, useState } from 'react';
import { UserContext } from '../components/User/userContext';
import { Navigate } from 'react-router-dom';

const ProtectedRoute = ({ children, redirectPath='/login' }) => {
    const user = useContext(UserContext)
    return (
        <>
            {user.logged ? children : <Navigate to={redirectPath}/>}
        </>
    );
}

export default ProtectedRoute;

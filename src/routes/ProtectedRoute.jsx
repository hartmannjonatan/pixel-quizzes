import React, { useContext, useState } from 'react';
import { UserContext } from '../components/userContext';
import { Navigate, useOutletContext } from 'react-router-dom';

const ProtectedRoute = ({ children, redirectPath='/login' }) => {
    const user = useContext(UserContext)
    return (
        <>
            {user.logged ? children : <Navigate to={redirectPath}/>}
        </>
    );
}

export default ProtectedRoute;

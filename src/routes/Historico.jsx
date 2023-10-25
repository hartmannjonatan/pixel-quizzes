import React from 'react';
import ProtectedRoute from './ProtectedRoute';

const Historico = () => {
    return (
        <ProtectedRoute redirectPath='/login'>
            <h1>Histórico</h1>
        </ProtectedRoute>
    );
}

export default Historico;

import React from 'react';
import ProtectedRoute from './ProtectedRoute';

const Quiz = () => {
    return (
        <ProtectedRoute redirectPath='/login'>
            <h1>Quiz</h1>
        </ProtectedRoute>
    );
}

export default Quiz;

import React from 'react';
import { Navigate } from 'react-router-dom';

const PrivateRoute = ({ children }:any) => {
  // Check if the user is authenticated (e.g., by checking a token in localStorage)
  const isAuthenticated = !!localStorage.getItem('token');

  // If not authenticated, redirect to the login page
  return isAuthenticated ? children : <Navigate to="/signin" />;
};

export default PrivateRoute;

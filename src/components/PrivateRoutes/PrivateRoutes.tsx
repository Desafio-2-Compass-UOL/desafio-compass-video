import React from 'react';
import { Route, Navigate } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';

interface PrivateRouteProps {
  path: string;
  element: React.ReactElement;
  children?: React.ReactNode;
}

const PrivateRoute: React.FC<PrivateRouteProps> = ({ children, ...rest }) => {
  const { isAuthenticated } = useAuth();

  return isAuthenticated ? (
    <Route {...rest}>{children}</Route>
  ) : (
    <Navigate to="/" replace />
  );
};

export default PrivateRoute;

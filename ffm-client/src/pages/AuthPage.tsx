import * as React from 'react';
import AuthContainer from '../containers/AuthContainer';
export interface AuthPageProps {}

const AuthPage: React.FC<AuthPageProps> = props => {
  return <AuthContainer />;
};

export default AuthPage;

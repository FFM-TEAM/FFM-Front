import * as React from 'react';
import AuthModal from '../components/auth/AuthModal';
import AuthForm from '../components/auth/AuthForm';
import { useLocation } from 'react-router-dom';

interface Props {}

const AuthContainer: React.FC<Props> = props => {
  const location = useLocation();
  console.log('AUTH');
  return (
    <AuthModal visible={true} onClose={() => {}}>
      <AuthForm
        mode={'REGISTER'}
        onToggleMode={() => {}}
        onSendAuthEmail={() => {}}
        loading={false}
        registered={true}
        currentPath={`${location.pathname}${location.search}`}
      />
    </AuthModal>
  );
};

export default AuthContainer;

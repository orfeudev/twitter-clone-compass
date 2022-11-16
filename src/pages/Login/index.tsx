import React from 'react';
import {
  Container,
  MainForm,
  TwitterIcon,
  FormTitle,
  Input,
  HelpSection,
} from './styles';
import Button from '../../components/Button';
import { Link, useNavigate } from 'react-router-dom';
export const Login = () => {
  const navigate = useNavigate();
  const handleLogin = () => {
    console.log('login');
    return navigate('/');
  };

  return (
    <Container>
      <MainForm>
        <TwitterIcon />
        <FormTitle>Log in to Twitter</FormTitle>
        <Input placeholder="Phone number, email address" type={'text'} />
        <Input placeholder="Password" type={'password'} />
        <Button onClick={handleLogin}>Log In</Button>
        <HelpSection>
          <Link to="/forgotPassword">Forgot password?</Link>
          <Link to="/signup">Sign up to Twitter</Link>
        </HelpSection>
      </MainForm>
    </Container>
  );
};

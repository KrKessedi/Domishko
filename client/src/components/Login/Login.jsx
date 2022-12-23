import React, { useState } from 'react';
import {
  Button,
  Container,
  Form,
  LoginInput,
  LoginLabel,
  RegisterLink,
  Title,
  Wrapper,
} from './Login.styled';
import { useDispatch } from 'react-redux';
import { login } from '../../redux/apiCalls';
import { Link } from 'react-router-dom';

const Login = () => {
  const [email, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();

  const handleClick = (e) => {
    e.preventDefault();
    login(dispatch, { email, password });
  };

  return (
    <Container>
      <Wrapper>
        <Title>
          Войдите в свой аккаунт, чтобы получить доступ ко всем функциям
        </Title>
        <Form>
          <LoginLabel>Почта</LoginLabel>
          <LoginInput
            type="text"
            placeholder="Почта"
            onChange={(e) => setUsername(e.target.value)}
          />
          <LoginLabel>Пароль</LoginLabel>
          <LoginInput
            type="password"
            placeholder="Пароль"
            onChange={(e) => setPassword(e.target.value)}
          />
          <Button onClick={handleClick}>Login</Button>
        </Form>
        <RegisterLink>
          Если у Вас нет аккаунта? <Link to="/register">Регистрация</Link>
        </RegisterLink>
      </Wrapper>
    </Container>
  );
};

export default Login;

import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { register } from '../../redux/apiCalls';
import {
  Button,
  Container,
  Form,
  Input,
  Title,
  Wrapper,
  Label,
} from './Register.styled';

const Register = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');
  const [conPass, setConPass] = useState('');
  const dispatch = useDispatch();

  const handleClick = (e) => {
    e.preventDefault();
    if (conPass === password) {
      register(dispatch, { username, password, email });
    } else {
      alert('wrong password!!!');
    }
  };
  return (
    <Container>
      <Wrapper>
        <Title>Создать аккаунт</Title>
        <Form>
          <Label>Имя</Label>
          <Input
            placeholder="Имя"
            onChange={(e) => setUsername(e.target.value)}
          />
          <Label>Почта</Label>
          <Input
            placeholder="Почта"
            onChange={(e) => setEmail(e.target.value)}
          />
          <Label>Пароль</Label>
          <Input
            placeholder="Пароль"
            onChange={(e) => setPassword(e.target.value)}
          />
          <Label>Подтвердите пароль</Label>
          <Input
            placeholder="Подтвердите пароль"
            onChange={(e) => setConPass(e.target.value)}
          />
          <Button onClick={handleClick}>Создать</Button>
        </Form>
      </Wrapper>
    </Container>
  );
};

export default Register;

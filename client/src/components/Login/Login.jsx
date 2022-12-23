<<<<<<< HEAD
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
=======
import React, { Component } from 'react'
import Slider from 'react-slick'

export default class CenterMode extends Component {
	render() {
		const settings = {
			className: 'center',
			centerMode: true,
			infinite: true,
			centerPadding: '60px',
			slidesToShow: 3,
			speed: 500,
		}
		return (
			<div>
				<h2>Center Mode</h2>
				<Slider {...settings}>
					<div>
						<h3>1</h3>
					</div>
					<div>
						<h3>2</h3>
					</div>
					<div>
						<h3>3</h3>
					</div>
					<div>
						<h3>4</h3>
					</div>
					<div>
						<h3>5</h3>
					</div>
					<div>
						<h3>6</h3>
					</div>
				</Slider>
			</div>
		)
	}
}
>>>>>>> c042ce1e3dee0e6c4d7a1eb13f2987d847fa2915

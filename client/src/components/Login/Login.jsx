import React, { useState } from "react";
import {
  Button,
  Container,
  Form,
  Input,
  Label,
  RegisterLink,
  Title,
  Wrapper,
  Image,
  Wrap,
} from "./Login.styled";
import { useDispatch } from "react-redux";
import { login } from "../../redux/apiCalls";
import { Link, useNavigate } from "react-router-dom";
import logo from "../../images/лого.svg";
import AuthImage from "../../images/Auth.jpg";

const Login = () => {
  const [email, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleClick = (e) => {
    e.preventDefault();
    login(dispatch, { email, password });
    navigate("/");
  };

  return (
    <Container>
      <Wrap className="top">
        <Wrapper>
          <img src={logo} alt="" />
          <Title margin={"2em 0 2em"}>
            Войдите в свой аккаунт, чтобы получить доступ ко всем функциям
          </Title>
          <Form action="/login">
            <Label>Электронная почта</Label>
            <Input
              bottom={"1.5em"}
              type="email"
              placeholder="Напишите свой адрес электронной почты"
              onChange={(e) => setUsername(e.target.value)}
            />
            <Label>Пароль</Label>
            <Input
              type="password"
              placeholder="Напишите свой пароль"
              onChange={(e) => setPassword(e.target.value)}
            />
            <Link to="/">
              <Button onClick={handleClick}>Войти</Button>
            </Link>
          </Form>
          <RegisterLink>
            Если у Вас еще нет аккаунта?{" "}
            <Link to="/register">Зарегистрируйтесь</Link>
          </RegisterLink>
        </Wrapper>
      </Wrap>
      <Wrap>
        <Image src={AuthImage} alt="book" />
      </Wrap>
    </Container>
  );
};

export default Login;

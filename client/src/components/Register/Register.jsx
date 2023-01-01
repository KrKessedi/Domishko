import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { register } from "../../redux/apiCalls";
import logo from "../../images/лого.svg";
import {
  Button,
  Container,
  Form,
  Input,
  Wrapper,
  Label,
  Image,
  Wrap,
  Title,
  RegisterLink,
} from "../Login/Login.styled";
import { Link, useNavigate } from "react-router-dom";
import AuthImage from "../../images/Auth.jpg";
import { toast } from "react-toastify";

const Register = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [conPass, setConPass] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const state = useSelector((state) => state.user.error);

  const handleClick = (e) => {
    e.preventDefault();
    if (conPass === password) {
      register(dispatch, { username, password, email });
      !state && navigate("/");
    } else {
      toast.error("Пароли не совпадают.");
    }
  };
  return (
    <Container>
      <Wrap className="top">
        <Wrapper>
          <img src={logo} alt="" style={{ marginBottom: "1em" }} />
          <Title margin={"2em 0 2em"}>
            Зарегистрируйтесь в систему, чтобы получить доступ ко всем функциям
          </Title>
          <Form>
            <Label>Имя</Label>
            <Input
              placeholder="Напишите свое имя"
              onChange={(e) => setUsername(e.target.value)}
            />
            <Label>Электронная почта</Label>
            <Input
              placeholder="Напишите свой адрес электронной почты"
              onChange={(e) => setEmail(e.target.value)}
            />
            <Label>Пароль</Label>
            <Input
              placeholder="Напишите свой пароль"
              onChange={(e) => setPassword(e.target.value)}
            />
            <Label>Подтвердите пароль</Label>
            <Input
              placeholder="Подтвердите свой пароль"
              onChange={(e) => setConPass(e.target.value)}
            />

            <Button onClick={handleClick}>Продолжить</Button>
          </Form>
          <RegisterLink>
            Если у Вас уже есть аккаунт? <Link to="/login">Войти</Link>
          </RegisterLink>
        </Wrapper>
      </Wrap>
      <Wrap>
        <Image src={AuthImage} alt="book" />
      </Wrap>
    </Container>
  );
};

export default Register;

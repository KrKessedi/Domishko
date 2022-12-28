import React from "react";
import {
  NavbarStyled,
  Flex,
  Input,
  Avatar,
  Title,
  NavWrapper,
} from "./Navbar.styled";
import logo from "../../images/лого.svg";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { AiOutlineLogout, AiOutlineUser } from "react-icons/ai";
import { RiAdminLine } from "react-icons/ri";
import { Logout } from "../../redux/apiCalls";
import { changeGenre } from "../../redux/bookSlice";

const Navbar = () => {
  const location = useLocation();
  const block = location.pathname.split("/")[1];
  const user = useSelector((state) => state.user.currentUser);
  const params = user?.email?.split("@")[0];
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleClick = () => {
    Logout(dispatch);
    navigate("/");
  };

  return (
    <>
      {block === "admin" ? (
        <NavbarStyled style={{ margin: "0" }}>
          <Flex height={"138px"}>
            <Link style={{ display: "flex" }} to="/">
              <img src={logo} alt="logo" style={{ width: "100px" }} />
            </Link>
            <Flex>
              <Input></Input>
              <NavWrapper>
                <AiOutlineLogout onClick={handleClick} />
                {user?.isAdmin && (
                  <Link to="/admin" style={{ display: "flex" }}>
                    <RiAdminLine />
                  </Link>
                )}
                <Link style={{ display: "flex" }} to={`/${params}`}>
                  {" "}
                  {user?.avatar ? (
                    <Avatar src={user?.avatar} />
                  ) : (
                    <AiOutlineUser />
                  )}
                </Link>
              </NavWrapper>
            </Flex>
          </Flex>
          <Flex style={{ display: "none" }}></Flex>
        </NavbarStyled>
      ) : (
        <NavbarStyled>
          <Flex height={"138px"}>
            <Link style={{ display: "flex" }} to="/">
              <img src={logo} alt="logo" style={{ width: "100px" }} />
            </Link>
            <Flex>
              <Input></Input>
              <NavWrapper>
                <AiOutlineLogout onClick={handleClick} />
                {user?.isAdmin && (
                  <Link to="/admin" style={{ display: "flex" }}>
                    <RiAdminLine />
                  </Link>
                )}
                <Link style={{ display: "flex" }} to={`/${params}`}>
                  {" "}
                  {user?.avatar ? (
                    <Avatar src={user?.avatar} />
                  ) : (
                    <AiOutlineUser />
                  )}
                </Link>
              </NavWrapper>
            </Flex>
          </Flex>
          <Flex>
            <Title onClick={() => navigate("/")}>Главная</Title>
            <Title
              onClick={() => {
                navigate("/genre");
                dispatch(changeGenre("Бестселлеры"));
              }}
            >
              Бестселлеры
            </Title>
            <Title
              onClick={() => {
                navigate("/genre");
                dispatch(changeGenre("Фантастика"));
              }}
            >
              Фантастика
            </Title>
            <Title
              onClick={() => {
                navigate("/genre");
                dispatch(changeGenre("Романтика"));
              }}
            >
              Романтика
            </Title>
            <Title
              onClick={() => {
                navigate("/genre");
                dispatch(changeGenre("История"));
              }}
            >
              История
            </Title>
            <Title
              onClick={() => {
                navigate("/genre");
                dispatch(changeGenre("Психология"));
              }}
            >
              Психология
            </Title>
            <Title
              onClick={() => {
                navigate("/genre");
                dispatch(changeGenre("Бизнес"));
              }}
            >
              Бизнес
            </Title>
          </Flex>
        </NavbarStyled>
      )}
    </>
  );
};

export default Navbar;

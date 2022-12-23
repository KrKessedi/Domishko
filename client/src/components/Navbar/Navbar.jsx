import React from 'react';
import avatar from '../../images/Avatar.png';
import { NavbarStyled, Flex, Input, Avatar, Title } from './Navbar.styled';
import logo from '../../images/лого.svg';

const Navbar = () => {
  return (
    <NavbarStyled>
      <Flex height={'138px'}>
        <img src={logo} alt="logo" style={{ marginLeft: '70px' }} />
        <Flex width={'922px'}>
          <Input></Input>
          <Avatar src={null || avatar} />
        </Flex>
      </Flex>
      <Flex width={'1200px'} margin={'0 auto'}>
        <Title>Главная</Title>
        <Title>Бестселлеры</Title>
        <Title>Фантастика</Title>
        <Title>Романтика</Title>
        <Title>История</Title>
        <Title>Психология</Title>
        <Title>Бизнес</Title>
      </Flex>
    </NavbarStyled>
  );
};

export default Navbar;

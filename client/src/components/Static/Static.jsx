import React from 'react';
import { Box, Number, Statistics, SubTitle, Title, Top } from './Static.styled';
import { FaSearch, FaUser } from 'react-icons/fa';
import { ImBook } from 'react-icons/im';

const Static = () => {
  return (
    <Statistics>
      <Box>
        <Top>
          <FaSearch />
          <Number>240</Number>
        </Top>
        <Title>Посещений сайта</Title>
        <SubTitle>Посещения показываются за период последнего дня.</SubTitle>
      </Box>
      <Box>
        <Top>
          <ImBook />
          <Number>4125</Number>
        </Top>
        <Title>Книг на сайте</Title>
        <SubTitle>Удаленные книги нельзя восстановить.</SubTitle>
      </Box>
      <Box>
        <Top>
          <FaUser />
          <Number>125</Number>
        </Top>
        <Title>Пользователей на сайте</Title>
        <SubTitle>Удаленные аккаунты нельзя восстановить.</SubTitle>
      </Box>
    </Statistics>
  );
};

export default Static;

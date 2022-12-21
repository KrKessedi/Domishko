import React from 'react';
import {
  Box,
  ChartWrapper,
  Left,
  Num,
  NumTitle,
  Right,
  SubTitle,
  Title,
} from './Chart.styled';
import { FaUserPlus } from 'react-icons/fa';
import { MdDownloadForOffline } from 'react-icons/md';

const Chart = () => {
  return (
    <>
      <Title>Статистика сайта</Title>
      <SubTitle>Период Январь - Июнь 2022</SubTitle>
      <ChartWrapper>
        <Left>
          <Box>
            <Num>
              <FaUserPlus />
              50
            </Num>
            <NumTitle>Регистраций на сайте</NumTitle>
          </Box>
          <Box>
            <Num>
              <MdDownloadForOffline />
              311
            </Num>
            <NumTitle>Скачивайний книг</NumTitle>
          </Box>
        </Left>
        <Right>Chart</Right>
      </ChartWrapper>
    </>
  );
};

export default Chart;

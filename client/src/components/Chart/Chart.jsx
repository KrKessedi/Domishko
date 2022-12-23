import React, { useEffect, useMemo, useState } from 'react';

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
import CH from '../CH/CH';
import { userReq } from '../../redux/apiCalls.js';

const Chart = () => {
  const [userStats, setUserStats] = useState([]);

  const MONTHS = useMemo(
    () => [
      'Янв',
      'Фев',
      'Мар',
      'Апр',
      'Май',
      'Июн',
      'Июл',
      'Авг',
      'Сен',
      'Окт',
      'Ноя',
      'Дек',
    ],
    []
  );

  useEffect(() => {
    const getStats = async () => {
      try {
        const res = await userReq.get('/users/stats');
        res.data.map((item) =>
          setUserStats((prev) => [
            ...prev,
            {
              name: MONTHS[item._id - 1],
              'Активные пользоветели': item.total,
            },
          ])
        );
      } catch {}
    };
    getStats();
  }, [MONTHS]);

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
        <Right>
          <CH
            data={userStats}
            title="Количество зарегистрированных пользователей в сайте "
            grid
            dataKey="Активные пользоветели"
          />
        </Right>
      </ChartWrapper>
    </>
  );
};

export default Chart;

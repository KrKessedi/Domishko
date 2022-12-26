import React, { useEffect, useState } from 'react';
import { blockUser, deleteUser, getUser } from '../../redux/apiCalls';
import { Ava, Item, List, Title } from './StaticUsers.styled';
import format from 'date-fns/format';
import { useDispatch, useSelector } from 'react-redux';
import { DataGrid } from '@mui/x-data-grid';
import { Box } from '@mui/material';
import { RxAvatar } from 'react-icons/rx';

const StaticUsers = () => {
  const dispatch = useDispatch();
  const users = useSelector((state) => state.user.users);
  const [blocked, setBlocked] = useState();
  const res = {
    isBlocked: `${!blocked}`,
  };

  const block = {
    ...res,
  };

  useEffect(() => {
    getUser(dispatch);
  }, [dispatch]);

  const handleDelete = (id) => {
    deleteUser(id, dispatch);
  };

  const handleBlock = (id) => {
    blockUser(block, id, dispatch);
  };

  const columns = [
    {
      field: 'avatar',
      headerName: 'Аватар',
      width: 80,
      renderCell: (params) => {
        return (
          <List className="center">
            <Item>
              {params.row.avatar === '' ? (
                <Ava src={params.row.avatar} />
              ) : (
                <RxAvatar />
              )}
            </Item>
          </List>
        );
      },
    },
    {
      field: 'user',
      headerName: 'Имя пользователя',
      width: 176.4,
      renderCell: (params) => {
        return (
          <List className="center">
            <Item>{params.row.username}</Item>
          </List>
        );
      },
    },
    {
      field: 'email',
      headerName: 'Почта пользователя',
      width: 260,
      renderCell: (params) => {
        return (
          <List className="center">
            <Item>{params.row.email}</Item>
          </List>
        );
      },
    },
    {
      field: 'createdAt',
      headerName: 'Дата регистрации',
      width: 160,
      renderCell: (params) => {
        return (
          <List className="center">
            <Item>{format(new Date(params.row.createdAt), 'dd-MM-yyyy')}</Item>
          </List>
        );
      },
    },
    {
      field: 'blocked',
      headerName: 'Статус',
      width: 100,
      renderCell: (params) => {
        return (
          <List className="center">
            <Item>{params.row.isBlocked ? 'Да' : 'Нет'}</Item>
          </List>
        );
      },
    },
    {
      field: 'isBlocked',
      headerName: 'Заблокирвать',
      width: 180,
      renderCell: (params) => {
        return (
          <List
            className="btn"
            name="isBlocked"
            onClick={() => setBlocked(params.row.isBlocked)}
          >
            <Item
              className={params.row.isBlocked ? 'btn blocked' : 'btn edit'}
              onClick={() => handleBlock(params.row._id)}
            >
              {params.row.isBlocked ? 'Разблокировать' : 'Заблокирвать'}
            </Item>
          </List>
        );
      },
    },
    {
      field: 'delete',
      headerName: 'Удалить',
      width: 180,
      renderCell: (params) => {
        return (
          <List className="btn">
            <Item className="btn" onClick={() => handleDelete(params.row._id)}>
              Удалить
            </Item>
          </List>
        );
      },
    },
  ];

  return (
    <>
      <Title>Пользователи</Title>
      <Box sx={{ height: '650px', width: '100%' }}>
        <DataGrid
          rows={users}
          columns={columns}
          getRowId={(row) => row._id}
          pageSize={10}
          checkboxSelection
          disableSelectionOnClick
          rowsPerPageOptions={[10]}
        />
      </Box>
    </>
  );
};

export default StaticUsers;

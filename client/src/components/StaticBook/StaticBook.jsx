import React, { useEffect } from 'react';
import { Item, List, Title } from './StaticBook.styled';
import { useDispatch, useSelector } from 'react-redux';
import { DataGrid } from '@mui/x-data-grid';
import { Box } from '@mui/material';
import { deleteBook, getBooks } from '../../redux/apiCalls';
import { Link } from 'react-router-dom';
import format from 'date-fns/format';

const StaticBook = () => {
  const dispatch = useDispatch();
  const books = useSelector((state) => state.book.books);

  useEffect(() => {
    getBooks(dispatch);
  }, [dispatch]);

  const handleDelete = (id) => {
    deleteBook(id, dispatch);
  };

  const columns = [
    {
      field: 'book',
      headerName: 'Книга',
      width: 206.4,
      renderCell: (params) => {
        return (
          <List>
            <Item>{params.row.title}</Item>
          </List>
        );
      },
    },

    {
      field: 'categories',
      headerName: 'Категории',
      width: 120,
      renderCell: (params) => {
        return (
          <List className="center">
            <Item>{params.row.categories}</Item>
          </List>
        );
      },
    },
    {
      field: 'rating',
      headerName: 'Рейтинг',
      width: 80,
      renderCell: (params) => {
        return (
          <List className="center">
            <Item>{params.row.rating}</Item>
          </List>
        );
      },
    },
    {
      field: 'language',
      headerName: 'Язык',
      width: 140,
      renderCell: (params) => {
        return (
          <List className="center">
            <Item>{params.row.language}</Item>
          </List>
        );
      },
    },
    {
      field: 'pages',
      headerName: 'Страниц',
      width: 90,
      renderCell: (params) => {
        return (
          <List className="center">
            <Item>{params.row.pages}</Item>
          </List>
        );
      },
    },
    {
      field: 'createdAt',
      headerName: 'Дата загрузки',
      width: 140,
      renderCell: (params) => {
        return (
          <List className="center">
            <Item>{format(new Date(params.row.createdAt), 'dd-MM-yyyy')}</Item>
          </List>
        );
      },
    },
    {
      field: 'edit',
      headerName: 'Изменить',
      width: 180,
      renderCell: (params) => {
        return (
          <Link
            style={{ width: '100%' }}
            target="_blank"
            to={'/admin/book/' + params.row._id}
          >
            <List>
              <Item className="btn edit">Изменить</Item>
            </List>
          </Link>
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
      <Title>Книги</Title>
      <Box sx={{ height: '650px', width: '100%' }}>
        <DataGrid
          rows={books}
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

export default StaticBook;

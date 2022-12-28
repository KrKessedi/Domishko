import React, { useEffect } from "react";
import { blockUser, deleteUser, getUser } from "../../redux/apiCalls";
import { Ava, Item, List, Title } from "./StaticUsers.styled";
import format from "date-fns/format";
import { useDispatch, useSelector } from "react-redux";
import { DataGrid } from "@mui/x-data-grid";
import { Box } from "@mui/material";
import { RxAvatar } from "react-icons/rx";

const StaticUsers = () => {
  const dispatch = useDispatch();
  const users = useSelector((state) => state.user.users);

  useEffect(() => {
    getUser(dispatch);
  }, [dispatch]);

  const handleDelete = (id) => {
    deleteUser(id, dispatch);
  };

  const handleBlock = (id, isBlocked) => {
    const blocked = {
      isBlocked: !isBlocked,
    };
    const res = {
      ...blocked,
    };
    blockUser(id, res, dispatch);
  };

  const columns = [
    {
      field: "avatar",
      headerName: "Аватар",
      width: 120,
      renderCell: (params) => {
        return (
          <List className="center">
            <Item>
              {params.row.avatar === "" ? (
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
      field: "user",
      headerName: "Имя пользователя",
      width: 200,
      renderCell: (params) => {
        return (
          <List className="center">
            <Item>{params.row.username}</Item>
          </List>
        );
      },
    },
    {
      field: "email",
      headerName: "Почта пользователя",
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
      field: "createdAt",
      headerName: "Дата регистрации",
      width: 220,
      renderCell: (params) => {
        return (
          <List className="center">
            <Item>{format(new Date(params.row.createdAt), "dd-MM-yyyy")}</Item>
          </List>
        );
      },
    },
    {
      field: "blocked",
      headerName: "Статус",
      width: 142,
      renderCell: (params) => {
        return (
          <List className="center">
            <Item>{params.row.isBlocked ? "Да" : "Нет"}</Item>
          </List>
        );
      },
    },
    {
      field: "isBlocked",
      headerName: "Заблокирвать",
      width: 180,
      renderCell: (params) => {
        return (
          <List className="btn" name="isBlocked">
            <Item
              className={params.row.isBlocked ? "btn blocked" : "btn edit"}
              onClick={() => handleBlock(params.row._id, params.row.isBlocked)}
            >
              {params.row.isBlocked ? "Разблокировать" : "Заблокирвать"}
            </Item>
          </List>
        );
      },
    },
    {
      field: "delete",
      headerName: "Удалить",
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
      <Box sx={{ height: "371px", width: "100%", marginBottom: "20px" }}>
        <DataGrid
          rows={users}
          columns={columns}
          getRowId={(row) => row._id}
          pageSize={5}
          checkboxSelection
          disableSelectionOnClick
          rowsPerPageOptions={[5]}
        />
      </Box>
    </>
  );
};

export default StaticUsers;

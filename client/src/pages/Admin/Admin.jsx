import React from 'react';
import { Static } from '../../components';
import { Link } from 'react-router-dom';
import {
  AdminWrapper,
  Dashboard,
  Product,
  Sidebar,
  SidebarElements,
  SidebarWrapper,
} from './Admin.styled';

const Admin = (props) => {
  return (
    <AdminWrapper>
      <Sidebar>
        <SidebarWrapper>
          <Link to="/admin">
            <SidebarElements>Главная</SidebarElements>
          </Link>
          <Link to="/admin/book">
            <SidebarElements>Книги</SidebarElements>
          </Link>
          <Link to="/admin/users">
            <SidebarElements>Пользователи</SidebarElements>
          </Link>
          <Link to="/admin/createBook">
            <SidebarElements>Загрузить книгу</SidebarElements>
          </Link>
        </SidebarWrapper>
      </Sidebar>
      <Dashboard>
        <Static />
        <Product>{props.children}</Product>
      </Dashboard>
    </AdminWrapper>
  );
};

export default Admin;

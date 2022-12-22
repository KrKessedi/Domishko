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
          <SidebarElements>
            <Link to="/admin">Главная</Link>
          </SidebarElements>
          <SidebarElements>
            <Link to="/admin/book">Книги</Link>
          </SidebarElements>
          <SidebarElements>
            <Link to="/admin/users">Пользователи</Link>
          </SidebarElements>
          <SidebarElements>
            <Link to="/admin/createBook">Загрузить книгу</Link>
          </SidebarElements>
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

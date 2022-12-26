import React from 'react';
import { Routes, Route } from 'react-router-dom';
import WelcomePage from './pages/WelcomePage/WelcomePage';
import Login from './components/Login/Login';
import Register from './components/Register/Register';
import Layout from './components/Layout';
import ReadPage from './pages/ReadPage/ReadPage';
import Chart from './components/Chart/Chart';
import StaticBook from './components/StaticBook/StaticBook';
import StaticUsers from './components/StaticUsers/StaticUsers';
import CreateBook from './components/CreateBook/CreateBook';
import { Admin, UserProfile } from './pages';
import { UpdateBook } from './components';
import { useSelector } from 'react-redux';

const MainRoutes = () => {
  const user = useSelector((state) => state.user.currentUser);
  const params = user?.email?.split('@')[0];

  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<WelcomePage />} />
        <Route path="login" element={<Login />} />
        <Route path="register" element={<Register />} />
        <Route path={`${params}`} element={<UserProfile />} />
        <Route
          path="admin"
          element={
            <Admin>
              <Chart />
            </Admin>
          }
        />
        <Route
          path="admin/book"
          element={
            <Admin>
              <StaticBook />
            </Admin>
          }
        />
        <Route path="admin/book/:id" element={<UpdateBook />} />
        <Route
          path="admin/users"
          element={
            <Admin>
              <StaticUsers />
            </Admin>
          }
        />
        <Route
          path="admin/createBook"
          element={
            <Admin>
              <CreateBook />
            </Admin>
          }
        />
      </Route>
      <Route path="read" element={<ReadPage />} />
    </Routes>
  );
};

export default MainRoutes;

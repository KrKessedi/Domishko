import React from 'react';
import { Routes, Route } from 'react-router-dom';
import styled from 'styled-components';
import {
  Chart,
  Login,
  Register,
  StaticBook,
  StaticUsers,
  CreateBook,
} from './components';
import { Admin, WelcomePage } from './pages';

const Container = styled.div``;

function App() {
  return (
    <Container>
      <Routes>
        <Route index element={<WelcomePage />} />
        <Route path="login" element={<Login />} />
        <Route path="register" element={<Register />} />
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
      </Routes>
    </Container>
  );
}

export default App;

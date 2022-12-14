import React from 'react';
import { Routes, Route } from 'react-router-dom';
import styled from 'styled-components';
import { Login, Register } from './components';
import { WelcomePage } from './pages';

const Container = styled.div``;

function App() {
  return (
    <Container>
      <Routes>
        <Route index element={<WelcomePage />} />
        <Route path="login" element={<Login />} />
        <Route path="register" element={<Register />} />
      </Routes>
    </Container>
  );
}

export default App;

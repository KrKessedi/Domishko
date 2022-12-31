import React from "react";
import { Outlet, useLocation } from "react-router-dom";
import Navbar from "./Navbar/Navbar";
import Footer from "./Footer/Footer";
import styled from "styled-components";

export const Container = styled.div`
  padding: 0 60px;
`;

export const Admin = styled.div`
  width: 100%;
  padding: 5px 10px;
`;

const Layout = () => {
  const location = useLocation();
  const block = location.pathname.split("/")[1];
  return (
    <Container>
      {block === "admin" ? (
        <>
          <Navbar />
          <Admin>
            <Outlet />
          </Admin>
          <Footer />
        </>
      ) : (
        <>
          <Navbar />
          <Outlet />
          <Footer />
        </>
      )}
    </Container>
  );
};

export default Layout;

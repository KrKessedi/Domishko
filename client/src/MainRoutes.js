import React, { useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import WelcomePage from "./pages/WelcomePage/WelcomePage";
import Login from "./components/Login/Login";
import Register from "./components/Register/Register";
import Layout from "./components/Layout";
import ReadPage from "./pages/ReadPage/ReadPage";
import Chart from "./components/Chart/Chart";
import StaticBook from "./components/StaticBook/StaticBook";
import StaticUsers from "./components/StaticUsers/StaticUsers";
import CreateBook from "./components/CreateBook/CreateBook";
import { Admin, UserProfile } from "./pages";
import { UpdateBook } from "./components";
import GenrePage from "./pages/GenrePage/GenrePage";
import { useDispatch, useSelector } from "react-redux";
import { getBooks, getUser } from "./redux/apiCalls";

const MainRoutes = () => {
  const user = useSelector((state) => state.user.currentUser);
  const dispatch = useDispatch();
  const params = user?.email?.split("@")[0];

  useEffect(() => {
    getBooks(dispatch);
  }, [dispatch]);

  useEffect(() => {
    user?.isAdmin && getUser(dispatch);
  }, [dispatch, user?.isAdmin]);

  return (
    <Routes>
      <Route path="login" element={<Login />} />
      <Route path="register" element={<Register />} />
      <Route path="/" element={user ? <Layout /> : <Login />}>
        <Route index element={user ? <WelcomePage /> : <Login />} />
        <Route path="genre" element={<GenrePage />} />
        <Route
          path={`${params}`}
          element={user ? <UserProfile /> : <Login />}
        />
        <Route
          path="admin"
          element={
            user?.isAdmin && (
              <Admin>
                <Chart />
              </Admin>
            )
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
            user?.isAdmin && (
              <Admin>
                <StaticUsers />
              </Admin>
            )
          }
        />
        <Route
          path="admin/createBook"
          element={
            user?.isAdmin && (
              <Admin>
                <CreateBook />
              </Admin>
            )
          }
        />
      </Route>
      <Route path="read" element={<ReadPage />} />
    </Routes>
  );
};

export default MainRoutes;

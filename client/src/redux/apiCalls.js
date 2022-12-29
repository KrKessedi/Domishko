import axios from "axios";
import {
  addBookFailure,
  addBookStart,
  addBookSuccess,
  deleteBookFailure,
  deleteBookStart,
  deleteBookSuccess,
  getBookFailure,
  getBookStart,
  getBookSuccess,
  updateBookFailure,
  updateBookStart,
  updateBookSuccess,
} from "./bookSlice";
import {
  blockUserFailure,
  blockUserStart,
  blockUserSuccess,
  deleteUserFailure,
  deleteUserStart,
  deleteUserSuccess,
  getUserFailure,
  getUserStart,
  getUserSuccess,
  loginFailure,
  loginStart,
  loginSuccess,
  logout,
  registerFailure,
  registerStart,
  registerSuccess,
  updateUserFailure,
  updateUserStart,
  updateUserSuccess,
} from "./userSlice";

// const BASE_URL = "https://domishka.adaptable.app/";
const BASE_URL = "http://localhost:3001/";

export const publicReq = axios.create({
  baseURL: BASE_URL,
});

export const login = async (dispatch, user) => {
  dispatch(loginStart());
  try {
    const res = await publicReq.post("/auth/login", user);
    dispatch(loginSuccess(res.data));
  } catch (err) {
    dispatch(loginFailure());
  }
};

export const register = async (dispatch, user) => {
  dispatch(registerStart());
  try {
    const res = await publicReq.post("/auth/register", user);
    dispatch(registerSuccess(res.data));
  } catch (err) {
    dispatch(registerFailure());
  }
};

export const Logout = async (dispatch) => {
  dispatch(logout());
};

export const getUser = async (dispatch) => {
  dispatch(getUserStart());
  try {
    const res = await publicReq.get("/users", {
      headers: {
        Authorization: `Bearer ${
          JSON.parse(JSON.parse(localStorage.getItem("persist:root"))?.user)
            ?.currentUser?.accessToken
        }`,
      },
    });
    dispatch(getUserSuccess(res.data));
  } catch (err) {
    dispatch(getUserFailure());
    console.log(err);
  }
};

export const deleteUser = async (id, dispatch) => {
  dispatch(deleteUserStart());
  try {
    await publicReq.delete(`/users/${id}`, {
      headers: {
        Authorization: `Bearer ${
          JSON.parse(JSON.parse(localStorage.getItem("persist:root"))?.user)
            ?.currentUser?.accessToken
        }`,
      },
    });
    dispatch(deleteUserSuccess(id));
  } catch (err) {
    dispatch(deleteUserFailure());
  }
};

export const getBooks = async (dispatch) => {
  dispatch(getBookStart());
  try {
    const res = await publicReq.get("/books");
    dispatch(getBookSuccess(res.data));
  } catch (err) {
    dispatch(getBookFailure());
  }
};

export const deleteBook = async (id, dispatch) => {
  dispatch(deleteBookStart());
  try {
    await publicReq.delete(`/books/${id}`, {
      headers: {
        Authorization: `Bearer ${
          JSON.parse(JSON.parse(localStorage.getItem("persist:root"))?.user)
            ?.currentUser?.accessToken
        }`,
      },
    });
    dispatch(deleteBookSuccess(id));
  } catch (err) {
    dispatch(deleteBookFailure());
  }
};

export const addBook = async (book, dispatch) => {
  dispatch(addBookStart());
  try {
    const res = await publicReq.post(`/books`, book, {
      headers: {
        Authorization: `Bearer ${
          JSON.parse(JSON.parse(localStorage.getItem("persist:root"))?.user)
            ?.currentUser?.accessToken
        }`,
      },
    });
    dispatch(addBookSuccess(res.data));
  } catch (err) {
    dispatch(addBookFailure());
  }
};

export const blockUser = async (id, blocked, dispatch) => {
  dispatch(blockUserStart());
  try {
    const res = await publicReq.put(`/users/${id}`, blocked, {
      headers: {
        Authorization: `Bearer ${
          JSON.parse(JSON.parse(localStorage.getItem("persist:root"))?.user)
            ?.currentUser?.accessToken
        }`,
      },
    });
    dispatch(blockUserSuccess(res.data, id));
    window.location.reload();
  } catch (err) {
    dispatch(blockUserFailure());
    console.log(err);
  }
};

export const updateBook = async (book, id, dispatch) => {
  dispatch(updateBookStart());
  try {
    const res = await publicReq.put(`/books/${id}`, book, {
      headers: {
        Authorization: `Bearer ${
          JSON.parse(JSON.parse(localStorage.getItem("persist:root"))?.user)
            ?.currentUser?.accessToken
        }`,
      },
    });
    dispatch(updateBookSuccess(res.data._id, id));
    window.location.reload();
  } catch (err) {
    dispatch(updateBookFailure());
  }
};

export const updateUser = async (user, id, dispatch) => {
  dispatch(updateUserStart());
  try {
    const res = await publicReq.put(`/users/${id}`, user);
    dispatch(updateUserSuccess(res.data));
    window.location.reload();
  } catch (err) {
    dispatch(updateUserFailure());
  }
};

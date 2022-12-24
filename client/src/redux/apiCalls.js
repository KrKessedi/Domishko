import axios from 'axios';
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
} from './bookSlice';
import {
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
} from './userSlice';

const BASE_URL = 'http://localhost:3001/';
const TOKEN = JSON.parse(JSON.parse(localStorage.getItem('persist:root'))?.user)
  ?.currentUser?.accessToken;

export const publicReq = axios.create({
  baseURL: BASE_URL,
});

console.log(JSON.parse);

export const userReq = axios.create({
  baseURL: BASE_URL,
  headers: {
    token: `Bearer ${TOKEN}`,
  },
});

export const login = async (dispatch, user) => {
  dispatch(loginStart());
  try {
    const res = await publicReq.post('/auth/login', user);
    dispatch(loginSuccess(res.data));
  } catch (err) {
    dispatch(loginFailure());
  }
};

export const register = async (dispatch, user) => {
  dispatch(registerStart());
  try {
    const res = await publicReq.post('/auth/register', user);
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
    const res = await userReq.get('/users');
    dispatch(getUserSuccess(res.data));
  } catch (err) {
    dispatch(getUserFailure());
  }
};

export const deleteUser = async (id, dispatch) => {
  dispatch(deleteUserStart());
  try {
    await userReq.delete(`/users/${id}`);
    dispatch(deleteUserSuccess(id));
  } catch (err) {
    dispatch(deleteUserFailure());
  }
};

export const getBooks = async (dispatch) => {
  dispatch(getBookStart());
  try {
    const res = await publicReq.get('/books');
    dispatch(getBookSuccess(res.data));
  } catch (err) {
    dispatch(getBookFailure());
  }
};

export const deleteBook = async (id, dispatch) => {
  dispatch(deleteBookStart());
  try {
    await userReq.delete(`/books/${id}`);
    dispatch(deleteBookSuccess(id));
  } catch (err) {
    dispatch(deleteBookFailure());
  }
};

export const addBook = async (book, dispatch) => {
  dispatch(addBookStart());
  try {
    const res = await userReq.post(`/books`, book);
    dispatch(addBookSuccess(res.data));
  } catch (err) {
    dispatch(addBookFailure());
  }
};

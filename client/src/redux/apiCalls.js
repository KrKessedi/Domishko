import axios from 'axios';
import {
  loginFailure,
  loginStart,
  loginSuccess,
  logout,
  registerFailure,
  registerStart,
  registerSuccess,
} from './userSlice';

const BASE_URL = 'http://localhost:3001/';
const TOKEN = JSON.parse(JSON.parse(localStorage.getItem('persist:root')).user)
  ?.currentUser?.accessToken;

export const publicReq = axios.create({
  baseURL: BASE_URL,
});

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

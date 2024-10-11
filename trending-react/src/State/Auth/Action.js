import axios from "axios";
import {
  GET_USER_FAILURE,
  GET_USER_REQUEST,
  GET_USER_SUCCESS,
  LOGIN_FAILURE,
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  LOGOUT,
  REGISTER_FAILURE,
  REGISTER_REQUEST,
  REGISTER_SUCCESS,
} from "./ActionTypes";
import { useNavigate } from "react-router-dom";

export const register = (userData) => async (dispatch) => {
  const navigate = useNavigate();
  dispatch({
    type: REGISTER_REQUEST,
  });
  const baseUrl = "http://localhost:5454";
  try {
    const response = await axios.post(`${baseUrl}/auth/signup`, userData);
    const user = response.data;
    dispatch({ type: REGISTER_SUCCESS, payload: user.jwt });
    localStorage.setItem("jwt", user.jwt);
    console.log(user);
  } catch (error) {
    dispatch({
      type: REGISTER_FAILURE,
      payload: error.message,
    });
    console.log(error);
  }
};

export const login = (userData) => async (dispatch) => {
  dispatch({
    type: LOGIN_REQUEST,
  });
  const baseUrl = "http://localhost:5454";
  try {
    const response = await axios.post(`${baseUrl}/auth/signin`, userData.data);
    const user = response.data;
    dispatch({ type: LOGIN_SUCCESS, payload: user.jwt });
    localStorage.setItem("jwt", user.jwt);
    userData.navigate("/");
    console.log(user);
  } catch (error) {
    dispatch({
      type: LOGIN_FAILURE,
      payload: error.message,
    });
    console.log(error);
  }
};

export const getUser = (jwt) => async (dispatch) => {
  dispatch({
    type: GET_USER_REQUEST,
  });
  const baseUrl = "http://localhost:5454";
  try {
    const response = await axios.get(`${baseUrl}/api/users/profile`, {
      headers: {
        Authorization: `Bearer ${jwt}`,
      },
    });
    const user = response.data;
    dispatch({ type: GET_USER_SUCCESS, payload: user });
    console.log(user);
  } catch (error) {
    dispatch({
      type: GET_USER_FAILURE,
      payload: error.message,
    });
    console.log(error);
  }
};

export const logout = () => (dispatch) => {
  localStorage.clear();
  dispatch({ type: LOGOUT });
};
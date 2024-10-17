import api from "@/config/api";
import {
  ADD_COINT_TO_WATCHLIST_FAILURE,
  ADD_COINT_TO_WATCHLIST_REQUEST,
  ADD_COINT_TO_WATCHLIST_SUCCESS,
  GET_USER_WATCHLIST_FAILURE,
  GET_USER_WATCHLIST_REQUEST,
  GET_USER_WATCHLIST_SUCCESS,
} from "./ActionTypes";

export const getUserWatchlist = (jwt) => async (dispatch) => {
  dispatch({ type: GET_USER_WATCHLIST_REQUEST });
  try {
    const response = await api.get("/api/watchlist/user", {
      headers: {
        Authorization: `Bearer ${jwt}`,
      },
    });

    dispatch({
      type: GET_USER_WATCHLIST_SUCCESS,
      payload: response.data,
    });
    console.log("user wathlist", response.data);
  } catch (error) {
    console.log(error);
    dispatch({
      type: GET_USER_WATCHLIST_FAILURE,
      error: error.message,
    });
  }
};

export const addItemToWatchlist =
  ({ coinId, jwt }) =>
  async (dispatch) => {
    dispatch({ type: ADD_COINT_TO_WATCHLIST_REQUEST });
    try {
      const response = await api.patch(
        `/api/watchlist/add/coin/${coinId}`,
        {},
        {
          headers: {
            Authorization: `Bearer ${jwt}`,
          },
        }
      );
      dispatch({
        type: ADD_COINT_TO_WATCHLIST_SUCCESS,
        payload: response.data,
      });
      console.log("add coin to watchlist", response.data);
    } catch (error) {
      console.log("error", error.response.data);
      dispatch({
        type: ADD_COINT_TO_WATCHLIST_FAILURE,
        error: error.message,
      });
    }
  };

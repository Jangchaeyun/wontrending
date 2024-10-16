import api from "@/config/api";
import {
  GET_USER_WALLET_FAILURE,
  GET_USER_WALLET_REQUEST,
  GET_USER_WALLET_SUCCESS,
} from "../Wallet/ActionType";

export const getUserWatchlist = () => async (dispatch) => {
  dispatch({ type: GET_USER_WALLET_REQUEST });
  try {
    const response = await api.get("/api/watchlist/user");

    dispatch({
      type: GET_USER_WALLET_SUCCESS,
      payload: response.data,
    });
  } catch (error) {
    console.log(error);
    dispatch({
      type: GET_USER_WALLET_FAILURE,
      error: error.message,
    });
  }
};

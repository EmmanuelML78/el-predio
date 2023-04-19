export const GET_CANCHAS = "GET_CANCHAS";
export const GET_CANCHA_BY_ID = "GET_CANCHA_BY_ID";
export const POST_CANCHA = "POST_CANCHA";
export const DELETE_CANCHA = "DELETE_CANCHA";
export const PUT_CANCHA = "PUT_CANCHA";
import axios from "axios";

export const getCanchas = () => {
  return async (dispatch) => {
    const res = await axios.get("/canchas");
    const data = res.data;

    dispatch({
      type: GET_CANCHAS,
      payload: data,
    });
  };
};

export const getCanchaById = (canchaId) => {
  return async (dispatch) => {
    const res = await axios.get(`/canchas/${canchaId}`);
    const data = res.data;
    console.log("action data", data);
    dispatch({
      type: GET_CANCHAS,
      payload: data,
    });
  };
};

export const postCancha = (canchaData) => {
  return async (dispatch) => {
    const res = await axios.post("/canchas", canchaData);
    const data = res.data;

    dispatch({
      type: POST_CANCHA,
      payload: data,
    });
  };
};

export const deleteCancha = (canchaId) => {};

export const putCancha = (canchaId) => {};

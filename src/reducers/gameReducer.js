import { createSlice } from "@reduxjs/toolkit";

const HOST = "https://wk16-backend.herokuapp.com";
// const HOST = "http://localhost:8080";
const GAME_START_URL = `${HOST}/start`;
const GAME_ACTION_URL = `${HOST}/action`;
const USERNAME = "VanTaylor";

export const gameReducer = createSlice({
  name: "gameReducer",
  initialState: {
    loading: false,
    history: [],
    currentRoom: null,
  },
  reducers: {
    setCurrentRoom: (state, action) => {
      state.currentRoom = action.payload;
    },
    setLoading: (state, action) => {
      state.loading = action.payload;
    },
  },
});

export const startGame = () => {
  return (dispatch) => {
    dispatch(gameReducer.actions.setLoading(true));
    fetch(GAME_START_URL, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        username: USERNAME,
      }),
    })
      .then((res) => res.json())
      .then((json) => {
        console.log(`Received ${json} from the server..`);

        dispatch(gameReducer.actions.setCurrentRoom(json));

        dispatch(gameReducer.actions.setLoading(false));
      });
  };
};

export const makeMove = (action) => {
  return (dispatch) => {
    dispatch(gameReducer.actions.setLoading(true));
    fetch(GAME_ACTION_URL, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        username: USERNAME,
        ...action,
      }),
    })
      .then((res) => res.json())
      .then((json) => {
        console.log(`Received ${json} from the server..`);

        dispatch(gameReducer.actions.setCurrentRoom(json));

        dispatch(gameReducer.actions.setLoading(false));
      });
  };
};

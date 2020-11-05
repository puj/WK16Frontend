import React from "react";
import { Provider } from "react-redux";
import { gameReducer } from "./reducers/gameReducer";
import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import { CurrentRoom } from "./components/CurrentRoom";

const reducers = combineReducers(gameReducer);
const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducers, composeEnhancer(applyMiddleware(thunk)));

export const App = () => {
  return (
    <Provider store={store}>
      <div>
        <CurrentRoom></CurrentRoom>
      </div>
    </Provider>
  );
};

import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { startGame, makeMove, gameReducer } from "../reducers/gameReducer";
import "./RoomAction.css";

export const RoomAction = ({ type, description, direction, target }) => {
  const dispatch = useDispatch();

  const makeAction = () => {
    dispatch(makeMove({ type, direction }));
  };

  return (
    <button className="room-action" onClick={makeAction}>
      <p className="room-action-type">{type.toUpperCase()}</p>
      <p className="room-action-direction">{direction}</p>
      <p className="room-action-description">{description}</p>
    </button>
  );
};

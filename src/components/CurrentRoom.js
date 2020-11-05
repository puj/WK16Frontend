import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { startGame, makeMove, gameReducer } from "../reducers/gameReducer";
import { RoomAction } from "./RoomAction";
import "./CurrentRoom.css";

export const CurrentRoom = () => {
  const dispatch = useDispatch();
  const currentRoom = useSelector((store) => store.reducer.currentRoom);

  if (!currentRoom) {
    dispatch(startGame());
    return <></>;
  }

  return (
    <section className="room-container">
      <p className="room-description">{currentRoom.description}</p>
      <section className="room-actions">
        {currentRoom.actions.map((action) => (
          <RoomAction {...action} />
        ))}
      </section>
    </section>
  );
};

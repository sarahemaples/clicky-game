import React from "react";
import "./style.css";

function Score(props) {
  return (
    <span className="score">Score: {props.score} | High Score: {props.highScore} </span>
  );
}

export default Score;
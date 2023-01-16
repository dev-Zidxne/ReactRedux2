import { Component } from "react";
import { useSelector, useDispatch, connect } from "react-redux";

import classes from "./Counter.module.css";

const Counter = () => {
  const dispatch = useDispatch();
  const counter = useSelector((state) => state.counter);

  const incrementHandler = () => {
    dispatch({ type: "increment" });
  };

  const decrementHandler = () => {
    dispatch({ type: "decrement" });
  };

  const toggleCounterHandler = () => {};

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      <div className={classes.value}>{counter}</div>
      <button onClick={incrementHandler} className="counter-button">
        Increment
      </button>
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
      <button onClick={decrementHandler} className="counter-button">
        Decrement
      </button>
    </main>
  );
};

export default Counter;

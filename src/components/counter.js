import React from "react";

import { useSelector, useDispatch } from "react-redux";
import {
  increment,
  decrement,
  incrementByAmount,
} from "../features/counter/counterSlice";

const Counter = () => {
  const count = useSelector((state) => state.hound.value);

  const dispatch = useDispatch();

  return (
    <div style={{ display: "flex", padding: "240px", background: "green" }}>
      <div style={{ flexDirection: "column", alignContent: "flex-start" }}>
        <div style={{ margin: "10px" }}>
          <button
            style={{
              background: "red",
              padding: "10px",
              borderRadius: "100px",
            }}
            onClick={() => dispatch(increment())}
          >
            INC
          </button>
        </div>

        <div style={{ margin: "10px" }}>
          <button
            style={{
              background: "white",
              padding: "10px",
              borderRadius: "100px",
            }}
            onClick={() => dispatch(decrement())}
          >
            dec
          </button>
        </div>

        <div style={{ margin: "10px" }}>
          <button
            style={{
              background: "white",
              padding: "10px",
              borderRadius: "100px",
            }}
            onClick={() => dispatch(incrementByAmount(2))}
          >
            inc am
          </button>
        </div>
      </div>
      <div>
        <h1
          style={{ color: "#ffff", margin: "70px", alignContent: "flex-end" }}
        >
          {count}
        </h1>
      </div>
    </div>
  );
};

export default Counter;

import React from "react";
import { ADD, ADD_NUMBER, SUBTRACT, RESET } from "../slice/counterSlice";
import { TOGGLE_AUTH } from "../slice/authSlice";
import { useDispatch, useSelector } from "react-redux";

const CounterRTK = () => {
  const count = useSelector((state) => state.counter.count);
  // goes to the store in store.js, then to the counter reducer, then to the count initialState in the countSlice.js
  console.log(count);
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);
  // goes to the store, then to the auth reducer, then to the auth initialState
  console.log(isLoggedIn);

  const dispatch = useDispatch();

  return (
    <section className="--flex-center --100vh --bg-primary">
      <div className="container --bg-light --p2 --m2 --center-all --width-500px">
        <button
          className="--btn --btn-danger"
          onClick={() => dispatch(TOGGLE_AUTH())}
        >
          {isLoggedIn ? "Log Out" : "Login"}
        </button>
        <hr />
        {!isLoggedIn ? (
          <p>Please Login</p>
        ) : (
          <>
            <h3>React Counter App</h3>
            <h1>{count} </h1>
            
            <div className="buttons --flex-center">
              <button
                className=" --btn --btn-danger"
                onClick={() => dispatch(SUBTRACT())}
              >
                Subtract
              </button>
              <button className=" --btn" onClick={() => dispatch(RESET())}>
                Reset
              </button>
              <button
                className=" --btn --btn-primary"
                onClick={() => dispatch(ADD())}
              >
                Add
              </button>
              <button
                className=" --btn --btn-primary"
                onClick={() => dispatch(ADD_NUMBER(5))}
              >
                Add 5
              </button>
            </div>
          </>
        )}
      </div>
    </section>
  );
};

export default CounterRTK;

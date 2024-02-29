import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { handleAdd, handleAddNumber, handleReset, toggleAuth, handleSubtract } from "../store/actions/action";

const Counter = () => {
  const count = useSelector((state) => state.count);
  console.log(count);
  const isLoggedIn = useSelector(state => state.isLoggedIn);
  console.log(isLoggedIn);

 const dispatch = useDispatch();

// const handleSubtract = () => {
//   dispatch({
//     type: "SUBTRACT",
//   })
// }

// const handleReset = () => {
//   dispatch({
//     type: "RESET",
//   })
// }

// const handleAdd = () => {
//   dispatch({
//     type: "ADD",
//   })
// }
// const handleAddNumber = (amount) => {
//   dispatch({
//     type: "ADD_NUMBER",
//     payload: amount
//     //sending info from dispatch via the payload
//   })
// }
// const toggleAuth = () => {
//   dispatch({
//     type: "TOGGLE_AUTH"
//   })
// }

  return (
    <section className="--flex-center --100vh --bg-primary">
      <div className="container --bg-light --p2 --m2 --center-all --width-500px">
        <button className="--btn --btn-danger" onClick={() => dispatch(toggleAuth())}>{isLoggedIn ? "Log Out" : "Login"}</button>
        <hr />
        {
          !isLoggedIn ?
          (<p>Please Login</p>) :
          (
            <>
              <h3>React Counter App</h3>
              <h3>{count} </h3>
              <div className="buttons --flex-center">
                <button className="--btn" onClick={() => dispatch(handleSubtract())}>
                  Subtract
                </button>
                <button className="--btn"  onClick={() => dispatch(handleReset())}>
                  Reset
                </button>
                <button className="--btn"  onClick={() => dispatch(handleAdd())}>
                  Add
                </button>
                <button className="--btn"  onClick={() => dispatch(handleAddNumber(5))}>
                  Add 5
                </button>
              </div>
            </>
          )
        }
        
      </div>
    </section>
  );
};

export default Counter;


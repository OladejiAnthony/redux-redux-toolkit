import React from "react";
import { useDispatch, useSelector } from "react-redux";

const Counter = () => {
  const count = useSelector((state) => state);
  console.log(count);
  
  const dispatch = useDispatch();

  const handleSubtract = () => {
    
  }

  const handleReset = () => {
    
  }

  const handleAdd = () => {
   
  }
  

  //color variable for changing states instead of using useState()
  let color = "#444";
    if (count >= 1) {
      color = "green"
    } else if (count < 0) {
      color = "blue"
    } else {
      color = "#444"
    }

  return (
    <section className="--flex-center --100vh">
      <div>
        <h1 style={{ color: color }}>
          {count} 
        </h1>

        <div>
          <button onClick={handleSubtract}>
            Subtract
          </button>
          <button onClick={handleReset}>
            Reset
          </button>
          <button onClick={handleAdd}>
            Add
          </button>
        </div>
      </div>
    </section>
  );
};

export default Counter;


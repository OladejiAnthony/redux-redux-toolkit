import React from "react"
import "./App.scss";
//import Counter from "./components/redux/counter/Counter";
import CounterRTK from "./components/redux-toolkit/counter/CounterRTK";



function App() {

  return (
    <div>
      {/* <Counter /> */}
      <CounterRTK /> 
    </div>
  );
}

export default App;


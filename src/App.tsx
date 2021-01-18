import React from "react";
import logo from "./logo.svg";
import "./App.css";
import  TimeDescription from './Component/TimeDescription';

function App() {
  return (
    <div className="App">
      <h1 className="timerDesciption">Timer App</h1>
      <div className="timeClock">
            <div className="innerTime">
                <TimeDescription/>
            </div>
      </div>
    </div>
  );
}

export default App;

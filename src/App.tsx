import React from "react";
import "./App.css";
import  TimeDescription from './Component/TimeDescription';
import TimerFuntions from './Component/TimeFunction';

function App() {
  return (
    <div className="App">
      <h1 className="timerDesciption">Timer App</h1>
      <div className="timeClock">
            <div className="innerTime">
                <TimeDescription/>
                <TimerFuntions/>
            </div>
      </div>
    </div>
  );
}

export default App;

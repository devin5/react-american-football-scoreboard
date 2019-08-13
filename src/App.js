//TODO: STEP 1 - Import the useState hook.
import React, { useState } from "react";
import "./App.css";
import BottomRow from "./BottomRow";


window.addEventListener('load', (event) => {
  alert('Welcome to Super Bowl 49');
});


function App() {
  //TODO: STEP 2 - Establish your applictaion's state with some useState hooks.  You'll need one for the home score and another for the away score.
  const [set, setScore] = useState(24);
  const [setA , setScoreA] = useState(28);
  // const [time, setTime] = useState(4200);

  
  return (
    <div className="container">
      <section className="scoreboard">
        <div className="topRow">
          <div className="home">
            <h2 className="home__name">Patriots</h2>

            {/* TODO STEP 3 - We need to change the hardcoded values in these divs to accept dynamic values from our state. */}

            <div className="home__score">{setA}</div>
          </div>
          <div className="timer">00:42</div>
          <div className="away">
            <h2 className="away__name">SeaHawks</h2>
            <div className="away__score">{set}</div>
          </div>
        </div>
        <BottomRow />
      </section>
      <section className="buttons">
        <div className="homeButtons">
          {/* TODO STEP 4 - Now we need to attach our state setter functions to click listeners. */}
          <button className="homeButtons__touchdown" onClick = {() => setScoreA(setA + 100)}>Home Touchdown</button>
          <button className="homeButtons__fieldGoal" onClick = {() => setScoreA(setA + 10)}>Home Field Goal</button>
        </div>
        <div className="awayButtons">
          <button className="awayButtons__touchdown" onClick = {() => setScore(set - 10) }>Away Touchdown</button>
          <button className="awayButtons__fieldGoal" onClick = {() => setScore(set- 20)}>Away Field Goal</button>
        </div>
      </section>
    </div>
  );
}

export default App;


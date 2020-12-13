import React, { useState } from "react";

var isDone = false;

function App() {
  const [count, setCount] = useState(0);

  function increase() {
    setCount(count + 1);
  }

  function decrease() {
    setCount(count - 1);
  }

  const now = new Date().toLocaleTimeString("en-US", { hour12: false });
  const [time, setTime] = useState(now);

  function updateTime() {
    const newTime = new Date().toLocaleTimeString("en-US", { hour12: false });
    setTime(newTime);
  }

  setInterval(updateTime, 1000);

  return (
    <div className="container">
      <p style={isDone ? { textDecoration: "line-through" } : null}>Buy milk</p>
      <button onClick={() => isDone = true}>Change to strike through</button>
      <button onClick={() => isDone = false}>Change back</button>
      <h1>{count}</h1>
      <button onClick={increase}>+</button>
      <button onClick={decrease}>-</button>
      <h1>{time}</h1>
      <button onClick={updateTime}>Get Time</button>
    </div>
  );
}

export default App;

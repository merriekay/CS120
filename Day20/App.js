import React, { useState } from "react";

function App() {
  const [count, setCount] = useState(0);

  const increase = () => {
    setCount(count + 1);
  };

  return (
    //this is called a fragment
    <>
      <h1>Hello World!</h1>
      <div style={{ margin: "50px" }}>
        <h2>Welcome to React!</h2>
        <h3>Let's build a clicky button counter:</h3>
        <h4>{count}</h4>
        <button onClick={increase}>Add</button>
      </div>
    </>
  );
}

export default App;

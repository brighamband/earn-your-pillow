import React from "react";

export default function Splash(props) {
  return (
    <div className="App">
      <h1>
        Earn Your Pillow{" "}
        <span role="img" aria-label="100">
          💯
        </span>
      </h1>
      <h2>
        The productivity tool which unleashes your ability to (1) give your all
        every day so you can (2) sleep with no regrets.
      </h2>
      <button onClick={props.logIn}>Become 2.0 Now</button>
    </div>
  );
}

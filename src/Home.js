import React from "react";
import Ponderize from "./Ponderize";

export default function Home(props) {
  return (
    <div className="App">
      <h1>Welcome to Home.</h1>
      <button onClick={props.logOut}>Log me out</button>
      <br />
      <br />
      <Ponderize />
    </div>
  );
}

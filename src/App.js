import "./styles.css";
import React, { useState } from "react";
import Home from "./Home";
import Splash from "./Splash";

export default function App() {
  const [loggedIn, setLoggedIn] = useState(false);

  function logIn() {
    setLoggedIn(true);
  }

  function logOut() {
    setLoggedIn(false);
  }

  return (
    <div className="App">
      {!loggedIn ? <Splash logIn={logIn} /> : <Home logOut={logOut} />}
    </div>
  );
}

import React from "react";

export default function ActiveScripture(props) {
  return (
    <div className="active-scripture">
      <h1>{props.activeScripture.reference}</h1>
      <p>{props.activeScripture.content}</p>
    </div>
  );
}

import React from "react";

export default function Sidebar(props) {
  return (
    <div className="sidebar">
      {props.scriptureList.map((scripture) => (
        <li
          className="sidebar-scripture"
          key={scripture.id}
          onClick={() => props.setActiveScripture(scripture)}
        >
          {scripture.reference}
          <span
            className="sidebar-scripture-x"
            onClick={() => props.removeScripture(scripture)}
          >
            {" "}
            X
          </span>
        </li>
      ))}
    </div>
  );
}

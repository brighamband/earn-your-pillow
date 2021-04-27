import React from "react";

export default function AddNewScripture(props) {
  return (
    <>
      <h3>Add a New Scripture</h3>
      <input
        type="text"
        placeholder="Scripture Reference"
        value={props.newReference}
        onChange={(e) => props.setNewReference(e.target.value)}
      />
      <input
        type="text"
        placeholder="Scripture Content"
        value={props.newContent}
        onChange={(e) => props.setNewContent(e.target.value)}
      />
      <button
        onClick={() => props.addScripture()}
        disabled={props.newReference === "" || props.newContent === ""}
      >
        Add
      </button>
    </>
  );
}

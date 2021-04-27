import React, { useState } from "react";
import uuid from "react-uuid";

import Sidebar from "./Sidebar";
import ActiveScripture from "./ActiveScripture";
import AddNewScripture from "./AddNewScripture";

export default function Ponderize() {
  const scriptures = [
    {
      id: 1,
      reference: "MAT 5:16",
      content:
        "Let your light so shine before men, that they may see your good works, and glorify your Father which is in heaven."
    },
    {
      id: 2,
      reference: "PHP 4:13",
      content: "I can do all things through Christ which strengtheneth me."
    }
  ];
  const [scriptureList, setScriptureList] = useState(scriptures);
  const [activeScripture, setActiveScripture] = useState(scriptures[0]);
  const [newReference, setNewReference] = useState("");
  const [newContent, setNewContent] = useState("");

  function addScripture() {
    const scriptureToAdd = {
      id: uuid(),
      reference: newReference,
      content: newContent
    };
    console.log("add", scriptureToAdd);
    setScriptureList([...scriptureList, scriptureToAdd]);
    setNewReference("");
    setNewContent("");
  }

  function removeScripture(scriptureToRemove) {
    const tempArrObj = scriptureList.splice(scriptureToRemove.id, 1);
    setScriptureList(tempArrObj);
  }

  return (
    <>
      <div className="ponderize">
        <Sidebar
          scriptureList={scriptureList}
          setActiveScripture={(value) => setActiveScripture(value)}
          removeScripture={removeScripture}
        />
        <ActiveScripture activeScripture={activeScripture} />
      </div>
      <div className="add-new-scripture">
        <AddNewScripture
          newReference={newReference}
          setNewReference={(value) => setNewReference(value)}
          newContent={newContent}
          setNewContent={(value) => setNewContent(value)}
          addScripture={addScripture}
        />
      </div>
    </>
  );
}

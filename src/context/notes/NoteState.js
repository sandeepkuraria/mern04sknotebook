import React from "react";
import NoteContext from "./noteContext";
import { useState } from "react";
const NoteState = (props) => {
  const s1 = {
    name: "Sandeep",
    like: "ReactJS",
  };

  const [state, setstate] = useState(s1);
  const update = () => {
    setTimeout(() => {
      setstate({ name: "Paul", like: "Java" });
    }, 1000);
  };
  return (
    <NoteContext.Provider value={{ state, update }}>
      {props.children}
    </NoteContext.Provider>
  );
};

export default NoteState;

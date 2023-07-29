import React, { useContext, useEffect } from "react";
import noteContext from "../context/notes/noteContext";

const About = () => {
  const a = useContext(noteContext);
  useEffect(() => {
    // eslint-disable-next-line
    a.update();
  }, []);

  return (
    <>
      <div>This is {a.state.name} </div>
      <div>I Like to work on {a.state.like}</div>
    </>
  );
};

export default About;

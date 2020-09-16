import React from "react";
import Home from "./Home";
import Projects from "./Projects";
import About from "./About";
import Contact from "./Contact";
import Skills from "./Skills";
import Resume from "./Resume";

export default function Cube(props) {
  const cubeClass = `cube show-${props.side}`;
  return (
    <div className={cubeClass}>
      <Home />
      <About />
      <Projects />
      <Contact />
      <Skills />
      <Resume />
    </div>
  );
}

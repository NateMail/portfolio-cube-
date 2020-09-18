import React from "react";
import Home from "./Home";
import PersonalProjects from "./PersonalProjects";
import About from "./About";
import Contact from "./Contact";
import Skills from "./Skills";
import ProfessionalProjects from "./ProfessionalProjects";

export default function Cube(props) {
  const cubeClass = `cube show-${props.side}`;
  return (
    <div className={cubeClass}>
      <Home />
      <About />
      <PersonalProjects />
      <Contact />
      <Skills />
      <ProfessionalProjects />
    </div>
  );
}

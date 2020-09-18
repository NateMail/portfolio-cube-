import React from "react";

export default function Nav(props) {
  function onChange(e) {
    return props.update(e.target.value);
  }

  return (
    <div className="nav">
      <ul className="nav__list">
        <li className="nav__item">
          <button onClick={onChange} value="home">
            Home
          </button>
        </li>
        <li className="nav__item">
          <button onClick={onChange} value="about">
            About
          </button>
        </li>
        <li className="nav__item">
          <button onClick={onChange} value="skills">
            Skills
          </button>
        </li>
        <li className="nav__item">
          <button onClick={onChange} value="personalProjects">
            Personal Projects
          </button>
        </li>
        <li className="nav__item">
          <button onClick={onChange} value="professionalProjects">
            Professional Projects
          </button>
        </li>
        <li className="nav__item">
          <button onClick={onChange} value="contact">
            Contact
          </button>
        </li>
      </ul>
    </div>
  );
}

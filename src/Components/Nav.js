import React from "react";

export default function Nav(props) {
  function onChange(e) {
    return props.update(e.target.value);
  }

  return (
    <div className="nav">
      <div className="nav__logo" onClick={onChange} value="home"></div>
      <ul className="nav__list">
        <li className="nav__item">
          <button className="nav__btn btn" onClick={onChange} value="about">
            About
          </button>
        </li>
        <li className="nav__item">
          <button className="nav__btn btn" onClick={onChange} value="skills">
            Skills
          </button>
        </li>
        <li className="nav__item">
          <button
            className="nav__btn btn"
            onClick={onChange}
            value="personalProjects"
          >
            Personal
          </button>
        </li>
        <li className="nav__item">
          <button
            className="nav__btn btn"
            onClick={onChange}
            value="professionalProjects"
          >
            Professional
          </button>
        </li>
        <li className="nav__item">
          <button className="nav__btn btn" onClick={onChange} value="contact">
            Contact
          </button>
        </li>
      </ul>
    </div>
  );
}

import React from "react";

export default function PersonalProjects() {
  return (
    <div className="cube__face cube__face--personalProjects">
      <div className="projectsGrid">
        <div className="card card1">
          <div className="card__img"></div>
          <p className="card__text">
            My first full stack project a to-do list! In this project I
            developed a back end api using Ruby, Rails and PostgreSQL. It was
            also my first project using Handlebars. Working on it was a great
            experience!
          </p>
          <a className="card__link" href="#">
            link
          </a>
        </div>

        <div className="card card2">
          <div className="card__img"></div>
          <p className="card__text">
            This is a full stack workout application. The Front end consists of
            React and the Back end is Node and MongoDB Atlas.
          </p>
          <a className="card__link" href="#">
            link
          </a>
        </div>

        <div className="card card3">
          <div className="card__img"></div>
          <p className="card__text">
            This is my first full stack app using React for the front end. It is
            a monthly budgeting app. I used React and Rails.
          </p>
          <a className="card__link" href="#">
            link
          </a>
        </div>

        <div className="card card4">
          <div className="card__img"></div>
          <p className="card__text">
            This is a MERN stack application. It is used to look up all the
            museum collectables on Animal Crossing New Horizons.
          </p>
          <a className="card__link" href="#">
            link
          </a>
        </div>
      </div>
    </div>
  );
}

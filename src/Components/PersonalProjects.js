import React from "react";

export default function PersonalProjects() {
  return (
    <div className="cube__face cube__face--personalProjects">
      <div className="projectsGrid">
        <h1 className="personal">Personal Projects</h1>
        <div className="card card1">
          <div className="card__img personalCardImg1"></div>
          <p className="card__text">
            My first full stack project a to-do list! In this project I
            developed a back end api using Ruby, Rails and PostgreSQL.
          </p>
          <a
            className="card__link"
            href="https://natemail.github.io/to-do-list-front-end/"
          >
            link
          </a>
          <a
            className="card__repo"
            href="https://github.com/NateMail/to-do-list-front-end"
          >
            repo
          </a>
        </div>

        <div className="card card2">
          <div className="card__img personalCardImg2"></div>
          <p className="card__text">
            This is a full stack workout application. The Front end consists of
            React and the Back end is Node and MongoDB Atlas.
          </p>
          <a
            className="card__link"
            href="https://mighty-temple-74779.herokuapp.com/"
          >
            link
          </a>
          <a className="card__repo" href="https://github.com/NateMail/Workout">
            repo
          </a>
        </div>

        <div className="card card3">
          <div className="card__img personalCardImg3"></div>
          <p className="card__text">
            This is my first full stack app using React for the front end. It is
            a monthly budgeting app. I used React and Rails.
          </p>
          <a
            className="card__link"
            href="https://natemail.github.io/budgeter/#/"
          >
            link
          </a>
          <a className="card__repo" href="https://github.com/NateMail/budgeter">
            repo
          </a>
        </div>

        <div className="card card4">
          <div className="card__img personalCardImg4"></div>
          <p className="card__text">
            This is a MERN stack application. It is used to look up all the
            museum collectables on Animal Crossing New Horizons.
          </p>
          <a
            className="card__link"
            href="https://acnhcollectables.herokuapp.com/"
          >
            link
          </a>
          <a
            className="card__repo"
            href="https://github.com/NateMail/acnhcollectables"
          >
            repo
          </a>
        </div>
      </div>
    </div>
  );
}

import React from "react";

export default function ProfessionalProjects() {
  return (
    <div className="cube__face cube__face--professionalProjects">
      <div className="projectsGrid">
        <h1 className="professional">Professional Projects</h1>
        <div className="card card1">
          <div className="card__img professionalCardImg1"></div>
          <p className="card__text">COMING SOON!</p>
          {/* <a className="card__link" href="#">
            link
          </a>
          <a className="card__repo" href="#">
            repo
          </a> */}
        </div>

        <div className="card card2">
          <div className="card__img professionalCardImg2"></div>
          <p className="card__text">
            This website is a frontend react build for a tutoring service. The
            website uses sass and is deployed to netlify. Emailing is sent
            through email.js.
          </p>
          <a className="card__link" href="https://www.greatexpectationsma.com/">
            link
          </a>
          <a
            className="card__repo"
            href="https://github.com/NateMail/greatexpectationsmoc"
          >
            repo
          </a>
        </div>

        <div className="card card3">
          <div className="card__img professionalCardImg3"></div>
          <p className="card__text">
            This website is a frontend react build for Peace of mind mentoring.
            The website uses Sass, netlify, React, and email.js.
          </p>
          <a
            className="card__link"
            href="https://www.peaceofmindmentoring.com/"
          >
            link
          </a>
        </div>

        <div className="card card4">
          <div className="card__img professionalCardImg1"></div>
          <p className="card__text">COMING SOON!</p>
          {/* <a className="card__link" href="#">
            link
          </a>
          <a className="card__repo" href="#">
            repo
          </a> */}
        </div>
      </div>
    </div>
  );
}

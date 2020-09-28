import React from "react";
import {
  DiHtml5,
  DiCss3,
  DiGit,
  DiBootstrap,
  DiSass,
  DiNpm,
  DiJsBadge,
  DiJqueryLogo,
  DiReact,
  DiNodejs,
  DiMongodb,
  DiRuby,
  DiRor,
  DiPython,
  DiPostgresql,
} from "react-icons/di";

export default function Skills() {
  return (
    <div className="cube__face cube__face--skills">
      <div className="skills">
        <ul className="skills__list1">
          <li className="skills__item skills__html">
            <DiHtml5 className="skills__icon html" />
            <br />
            HTML5
          </li>
          <li className="skills__item">
            <DiCss3 className="skills__icon css" />
            <br />
            CSS3
          </li>
          <li className="skills__item">
            <DiGit className="skills__icon git" />
            <br />
            GIT
          </li>
          <li className="skills__item">
            <DiBootstrap className="skills__icon boot" />
            <br />
            Bootstrap
          </li>
        </ul>

        <ul className="skills__list2">
          <li className="skills__item">
            <DiSass className="skills__icon sass" />
            <br />
            SASS
          </li>
          <li className="skills__item">
            <DiNpm className="skills__icon npm" />
            <br />
            NPM
          </li>
          <li className="skills__item">
            <DiJsBadge className="skills__icon js" />
            <br />
            JavaScript
          </li>
          <li className="skills__item">
            <DiJqueryLogo className="skills__icon query" />
            <br />
            JQUERY
          </li>
        </ul>

        <ul className="skills__list3">
          <li className="skills__item">
            <DiMongodb className="skills__icon mongo" />
            <br />
            Mongo.DB
          </li>
          <li className="skills__item">
            <DiJsBadge className="skills__icon js" />
            <br />
            Express.JS
          </li>
          <li className="skills__item">
            <DiReact className="skills__icon react" />
            <br />
            React.JS
          </li>
          <li className="skills__item">
            <DiNodejs className="skills__icon node" />
            <br />
            Node.JS
          </li>
        </ul>

        <ul className="skills__list4">
          <li className="skills__item">
            <DiRuby className="skills__icon ruby" />
            <br />
            Ruby
          </li>
          <li className="skills__item">
            <DiRor className="skills__icon ruby" />
            <br />
            Ruby on Rails
          </li>
          <li className="skills__item">
            <DiPython className="skills__icon py" />
            <br />
            Python 3
          </li>
          <li className="skills__item">
            <DiPostgresql className="skills__icon post" />
            <br />
            PostgreSQL
          </li>
        </ul>
      </div>
    </div>
  );
}

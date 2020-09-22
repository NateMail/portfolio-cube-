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
  DiVisualstudio,
  DiHeroku,
} from "react-icons/di";

export default function Skills() {
  return (
    <div className="cube__face cube__face--skills">
      <div className="skills">
        <ul className="skills__list1">
          <li className="skills__item">
            <DiHtml5 className="skills__icon html" /> HTML5
          </li>
          <li className="skills__item">
            <DiCss3 className="skills__icon css" />
            CSS3
          </li>
          <li className="skills__item">
            <DiGit className="skills__icon git" />
            GIT
          </li>
          <li className="skills__item">
            <DiBootstrap className="skills__icon boot" />
            Bootstrap
          </li>
          <li className="skills__item">
            <DiSass className="skills__icon sass" />
            SASS
          </li>
          <li className="skills__item">
            <DiNpm className="skills__icon npm" />
            NPM
          </li>
        </ul>

        <ul className="skills__list2">
          <li className="skills__item">
            <DiJsBadge className="skills__icon js" />
            JavaScript
          </li>
          <li className="skills__item">
            <DiJqueryLogo className="skills__icon query" />
            JQUERY
          </li>
          <li className="skills__item">
            <DiMongodb className="skills__icon mongo" />
            Mongo.DB Atlas
          </li>
          <li className="skills__item">
            <DiJsBadge className="skills__icon js" />
            Express.JS
          </li>
          <li className="skills__item">
            <DiReact className="skills__icon react" />
            React.JS
          </li>
          <li className="skills__item">
            <DiNodejs className="skills__icon node" />
            Node.JS
          </li>
        </ul>

        <ul className="skills__list3">
          <li className="skills__item">
            <DiRuby className="skills__icon ruby" /> Ruby
          </li>
          <li className="skills__item">
            <DiRor className="skills__icon ruby" />
            Ruby on Rails
          </li>
          <li className="skills__item">
            <DiPython className="skills__icon py" />
            Python 3
          </li>
          <li className="skills__item">
            <DiPostgresql className="skills__icon post" />
            PostgreSQL
          </li>
          <li className="skills__item">
            <DiVisualstudio className="skills__icon vs" />
            VS Code
          </li>
          <li className="skills__item">
            <DiHeroku className="skills__icon her" />
            Heroku
          </li>
        </ul>
      </div>
    </div>
  );
}

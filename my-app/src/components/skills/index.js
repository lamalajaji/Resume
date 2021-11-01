import React from "react";
import "./style.css";

export default function Skills() {
  return (
    <div className="skills">
      <h2 className="skillsHead">
        {" "}
        <i className="fa fa-lg fa-code" aria-hidden="true"></i>
        SKILLS
      </h2>
      <hr/>
      <ul className="skillsUL">
        <li>
          {" "}
          <span>HTML</span>
        </li>
        <li>
          {" "}
          <span>CSS</span>
        </li>
        <li>
          {" "}
          <span>JavaScipt</span>
        </li>
        <li>
          {" "}
          <span>React</span>
        </li>
        <li>
          {" "}
          <span>JQuery</span>
        </li>
        <li>
          {" "}
          <span>Python</span>
        </li>
        <li>
          {" "}
          <span>SQL</span>
        </li>
      </ul>
    </div>
  );
}

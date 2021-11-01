import React from "react";
import "./style.css";

export default function Main() {
  return (
    <div className="aside">
      <aside>
        <div className="info">
          <h1>Lama Alajaji</h1>
          <h1 className="shade">Junior Web Developer</h1>
          <hr />
          <h3>
            {" "}
            <i className="fa fa-location-arrow" aria-hidden="true"></i>Qassim -
            SA{" "}
          </h3>

          <h3>
            {" "}
            <i className="fa fa-envelope" aria-hidden="true">
              {" "}
            </i>{" "}
            lamajaji98@gmail.com{" "}
          </h3>
          <hr />
          <ul>
            <li>
              <a
                className="fa fa-twitter fa-2x"
                href="https://twitter.com/lamajaji"
              ></a>
            </li>

            <li>
              <a
                className="fa fa-github fa-2x"
                href="https://github.com/lamalajaji"
              ></a>
            </li>
          </ul>
          <hr />
          <p>
            I built this site with <a href="https://reactjs.org">React </a>{" "}
            components. The full source code can be found in{" "}
            <a href="https://github.com/lamalajaji/Resume.git">
              my Github repo.{" "}
            </a>
          </p>
        </div>
      </aside>
    </div>
  );
}

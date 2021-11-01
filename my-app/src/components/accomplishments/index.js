import React from "react"; /// the shortcut rcf
import "./style.css";

export default function Accomplishments() {
  return (
    <div className="acc">
      <h2 className="accHeader">
        <i className="fas fa-laptop-house" aria-hidden="true"></i>
        ACCOMPLISHMENTS
      </h2>
      <hr/>
      <div className="cont2">
        <h3>Business analytics Nanodegree , Udacity</h3>
        <span>March - 2021</span>
        <h3>Programming by Python course</h3> <span>June - 2020</span>
      </div>
    </div>
  );
}

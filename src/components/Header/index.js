import React from "react";
import "./index.css";

const header = () => {
  return (
    <div className="header">
      <div className="header__menu">
        <p className="header__menu__text">{"conduit"}</p>
      </div>
      <div>
        <ul className="header__ul">
          <a href="/" className="header__li active">
            {"Home"}
          </a>
          <a href="login" className="header__li">
            {"Sign in"}
          </a>
          <a href="register" className="header__li">
            {"Sign up"}
          </a>
        </ul>
      </div>
    </div>
  );
};

export default header;

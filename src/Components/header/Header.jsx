import React from "react";
import'./header.css'
import { Outlet, Link } from "react-router-dom";
import Classify from "../Classify/Classify";

const Header = () => {
  return (
    <>
      <div className="header">
        <div className="link_container">
          <Link to="/">
            Summarize
          </Link>
        </div>
        <div className="link_container">
          <Link to="/classify">
            prediction
          </Link>
        </div>
      </div>
    </>
  );
};

export default Header;

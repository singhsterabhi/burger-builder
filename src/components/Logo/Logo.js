import React from "react";

import burgerlogo from "../../assets/images/burger-logo.png";
import classes from "./Logo.module.css";
import { Link } from "react-router-dom";

const logo = props => {
  return (
    <div className={classes.Logo} style={{ height: props.height }}>
      <Link to="/">
        <img src={burgerlogo} alt="MyBurger" />
      </Link>
    </div>
  );
};

export default logo;

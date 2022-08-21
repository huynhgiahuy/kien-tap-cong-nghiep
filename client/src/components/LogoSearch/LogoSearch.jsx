import React from "react";
import Logo from "../../img/logo.png";
import './LogoSearch.css'
import { UilSearch } from '@iconscout/react-unicons'
import { Link } from "react-router-dom";
const LogoSearch = () => {
  return (
    <div className="LogoSearch">
      <Link to="/home">
        <img src={Logo} alt="" />
      </Link>
    </div>
  );
};

export default LogoSearch;

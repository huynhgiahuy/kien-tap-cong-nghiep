import React from "react";

import Home from "../../img/home.png";
import House from "../../img/house_final.png";
import Comment from "../../img/comment.png";
import Logout from "../../img/logout.png";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { logout } from "../../actions/AuthActions";

const NavIcons = () => {
  const dispatch = useDispatch();

  const handleLogOut = () => {
    dispatch(logout())
  }
  return (
    <div className="navIcons">
      <Link to="../home">
        <img src={House} alt="" />
      </Link>
      <Link to="../chat">
        <img src={Comment} alt="" />
      </Link>
      <img src={Logout} alt="" onClick={handleLogOut} />
    </div>
  );
};

export default NavIcons;

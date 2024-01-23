import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="absolute z-10 top-5 left-20 ">
      <Link to={"/"}>
        <img
          className="w-48"
          src="https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png"
          alt="img1"
        />
      </Link>
    </div>
  );
};

export default Header;

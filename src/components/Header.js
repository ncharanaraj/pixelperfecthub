import React from "react";
import BlurContainer from "./BlurContainer";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <BlurContainer classNames={["w-full"]}>
      <nav className="flex">
        <Link to="/" className="flex-1">
          Home
        </Link>
        <li className="list-none mr-8">Login</li>
        <button className="border px-2 rounded-md">Create Account</button>
      </nav>
    </BlurContainer>
  );
};

export default Header;

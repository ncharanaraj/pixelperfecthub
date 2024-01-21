import React from "react";
import BlurContainer from "./BlurContainer";
import { Link } from "react-router-dom";
import { useAuth } from "../context/authContext";

const Header = () => {
  const { isLoginForm, setIsLoginForm } = useAuth();
  return (
    <BlurContainer classNames={["w-full"]}>
      <nav className="flex">
        <Link to="/" className="flex-1 font-extrabold text-2xl">
          PixelPerfectHub
        </Link>
        {!isLoginForm ? (
          <>
            <Link to="/login" className="mr-8">
              Login
            </Link>
            <Link
              to="/createAccount"
              onClick={() => setIsLoginForm(true)}
              className="border px-2 rounded-md"
            >
              Create Account
            </Link>
          </>
        ) : (
          <>
            <p>Logout</p>
          </>
        )}
      </nav>
    </BlurContainer>
  );
};

export default Header;

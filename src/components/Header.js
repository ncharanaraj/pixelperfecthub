import React from "react";
import BlurContainer from "./BlurContainer";
import { Link } from "react-router-dom";
import { useAuth } from "../context/authContext";
import { CircleUserRound, LogOut } from "lucide-react";

const Header = () => {
  const { setIsLoginForm, token, handleLogout } = useAuth();
  return (
    <BlurContainer classNames={["w-full"]}>
      <nav className="flex items-center">
        <Link to="/" className="flex-1 font-extrabold text-2xl">
          PixelPerfectHub
        </Link>
        {!token ? (
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
            <Link to="/profile" className="mr-4 flex flex-col items-center">
              <CircleUserRound />
              <span className="text-xs">Profile</span>
            </Link>
            <Link
              to="/"
              onClick={handleLogout}
              className="flex flex-col items-center"
            >
              <LogOut />
              <span className="text-xs">Logout</span>
            </Link>
          </>
        )}
      </nav>
    </BlurContainer>
  );
};

export default Header;

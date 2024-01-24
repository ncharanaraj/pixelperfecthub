import React, { useState } from "react";
import { Link, Outlet } from "react-router-dom";
import Background from "./Background";
import Header from "./Header";

const UserAccount = () => {
  const [activeTab, setActiveTab] = useState("profile");

  const handleClick = (clickedTab) => {
    setActiveTab(clickedTab);
  };

  return (
    <>
      <Background classNames={["h-60"]}>
        <Header />
      </Background>
      <div className="h-screen flex justify-center p-8">
        <div className="rounded-md border p-4 shadow-lg w-1/2 h-1/2 ">
          <div className="flex border-b-4">
            <Link
              to="/profile"
              className={`flex-1 w-full p-4 text-center ${
                activeTab === "profile" && "bg-green-300 font-bold"
              }`}
              onClick={() => handleClick("profile")}
            >
              Profile
            </Link>
            <Link
              to="/profile/history"
              className={`flex-1 w-full p-4 text-center ${
                activeTab === "history" && "bg-green-300 font-bold"
              }`}
              onClick={() => handleClick("history")}
            >
              Orders
            </Link>
          </div>
          <div>
            <Outlet />
          </div>
        </div>
      </div>
    </>
  );
};

export default UserAccount;

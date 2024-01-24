import React from "react";
import { useAuth } from "../context/authContext";

const Profile = () => {
  const { currentUser } = useAuth();
  const {
    email,
    user_metadata: { fullName },
  } = currentUser;
  return (
    <div className="p-4 h-full">
      <h2>
        <span className="font-semibold">Name: </span>
        {fullName}
      </h2>
      <p>
        <span className="font-semibold">Email: </span>
        {email}
      </p>
    </div>
  );
};

export default Profile;

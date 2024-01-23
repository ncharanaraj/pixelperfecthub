import React, { useState } from "react";
import { supabase } from "../backend/client";
import { useAuth } from "../context/authContext";
import { useLocation, useNavigate } from "react-router-dom";

const Login = () => {
  const { isLoginForm, setToken, setUser } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      let output;

      if (isLoginForm) {
        output = await supabase.auth.signUp({
          email: formData.email,
          password: formData.password,
          options: {
            data: {
              fullName: formData.fullName,
            },
          },
        });
      } else {
        output = await supabase.auth.signInWithPassword({
          email: formData.email,
          password: formData.password,
        });
      }

      const { data, error } = output;
      const { user, session } = data;

      if (session !== null) {
        const redirectPath = location.state?.path || "/";
        navigate(redirectPath, { replace: true });
      } else {
        navigate("/", { replace: true });
      }

      setToken(session);
      setUser(user);
      sessionStorage.setItem("loginDetails", JSON.stringify(data));

      if (error) {
        console.error(error);
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="flex flex-col justify-center items-center h-screen">
      <form onSubmit={handleSubmit} className="border flex flex-col p-4 gap-4">
        <h1 className="text-2xl text-center font-bold">
          {isLoginForm ? "CREATE ACCOUNT" : "LOGIN"}
        </h1>
        {isLoginForm && (
          <label>
            <div>Full Name:</div>
            <input
              type="text"
              name="fullName"
              placeholder="Full Name"
              onChange={handleChange}
              className="border w-96 p-2 rounded-sm"
            />
          </label>
        )}

        <label>
          <div>Email:</div>
          <input
            type="text"
            name="email"
            placeholder="Email"
            onChange={handleChange}
            className="border w-96 p-2 rounded-sm"
          />
        </label>

        <label>
          <div>Password:</div>
          <input
            type="password"
            name="password"
            placeholder="Password"
            onChange={handleChange}
            className="border w-96 p-2 rounded-sm"
          />
        </label>
        <button
          type="submit"
          className="border p-2 font-semibold text-white bg-green-400 rounded-full"
        >
          {isLoginForm ? "Create Account" : "Login"}
        </button>
        {!isLoginForm && (
          <span>Pass: Charan@123 - Email: ncharanaraj@gmail.com</span>
        )}
      </form>
    </div>
  );
};

export default Login;

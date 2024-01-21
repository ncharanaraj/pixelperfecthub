import React, { useState } from "react";
import { supabase } from "../backend/client";
import { useAuth } from "../context/authContext";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const { isLoginForm } = useAuth();
  const navigate = useNavigate();
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
      // const { data, error } = isLoginForm
      //   ? await supabase.auth.signUp({
      //       ...formData,
      //       options: {
      //         data: {
      //           fullName: formData.fullName,
      //         },
      //       },
      //     })
      //   :
      const { data, error } = await supabase.auth.signInWithPassword({
        ...formData,
      });

      console.log(data);

      error ? console.error(error) : navigate("/");
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

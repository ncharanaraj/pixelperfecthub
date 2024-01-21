import React, { useState } from "react";

const Login = () => {
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

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log(formData);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>
          <input
            type="text"
            name="fullName"
            placeholder="FullName"
            onChange={handleChange}
          />
        </label>
        <label>
          <input
            type="text"
            name="email"
            placeholder="Email"
            onChange={handleChange}
          />
        </label>
        <label>
          <input
            type="text"
            name="password"
            placeholder="Password"
            onChange={handleChange}
          />
        </label>
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default Login;

import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "../api/axios";

function Login() {

  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    email: "",
    password: ""
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {

    e.preventDefault();

    try {

      const res = await axios.post(
        "/auth/login",
        formData
      );

      localStorage.setItem(
        "token",
        res.data.token
      );

      navigate("/dashboard");

    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="auth-page">

      <div
        className="auth-container"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >

        <div className="hero-section">

          <h1>
            Manage Projects Like a Pro
          </h1>

          <p>
            Organize projects, assign tasks, track progress,
            and collaborate with your team efficiently.
          </p>

        </div>

        <div className="form-section">

          <h2>Welcome Back 👋</h2>

          <span>
            Login to continue managing your team tasks.
          </span>

          <form
            className="form-box"
            onSubmit={handleSubmit}
          >

            <input
              type="email"
              name="email"
              placeholder="Enter email"
              onChange={handleChange}
            />

            <input
              type="password"
              name="password"
              placeholder="Enter password"
              onChange={handleChange}
            />

            <button className="primary-btn">
              Login
            </button>

          </form>

          <p className="link-text">
            Don't have an account? <Link to="/register">Register</Link>
          </p>

        </div>

      </div>

    </div>
  );
}

export default Login;
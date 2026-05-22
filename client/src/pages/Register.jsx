import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "../api/axios";

function Register() {

  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    role: "member"
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

      await axios.post(
        "/auth/register",
        formData
      );

      navigate("/");

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
            Build Teams & Track Progress
          </h1>

          <p>
            Create projects, assign tasks,
            and manage work seamlessly.
          </p>

        </div>

        <div className="form-section">

          <h2>Create Account 🚀</h2>

          <span>
            Start managing projects efficiently.
          </span>

          <form
            className="form-box"
            onSubmit={handleSubmit}
          >

            <input
              type="text"
              name="name"
              placeholder="Enter name"
              onChange={handleChange}
            />

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

            <select
              name="role"
              onChange={handleChange}
            >
              <option value="member">
                Member
              </option>

              <option value="admin">
                Admin
              </option>
            </select>

            <button className="primary-btn">
              Register
            </button>

          </form>

          <p className="link-text">
            Already have an account? <Link to="/">Login</Link>
          </p>

        </div>

      </div>

    </div>
  );
}

export default Register;
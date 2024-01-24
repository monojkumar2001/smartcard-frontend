import { useState } from "react";
import axios from "axios";
import { useRouter } from "next/router";

import AppLayout from "../components/Layout/Layout";
import Link from "next/link";

const apiUrl = process.env.NEXT_PUBLIC_API_BASE_URL;

const Register = () => {
  const router = useRouter();
  const currentPathname = router.pathname;

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const [message, setMessage] = useState("");

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleRegister = async () => {
    try {
      const response = await axios.post(`${apiUrl}/api/register`, formData);
      setMessage(response.data.message);

      if (response.data.message.includes("Registration successful")) {
        setFormData({
          name: "",
          email: "",
          password: "",
        });

        const email = encodeURIComponent(formData.email);

        router.push(`/verify-email?email=${email}`);
      }
    } catch (error) {
      setMessage("Registration failed. Please try again.");
    }
  };

  return (
    <>
      <div className="login-page cpt-6 cpb-7">
        <div className="container">
          <div className="login-content">
            <div className="logo-img d-flex align-items-center justify-content-center mb-3 ">
              <img src="/assets/img/logo/logo.svg" alt="" />
            </div>
            <h1>Create a new account</h1>
            <p className="login-dis-text">
              Already have an account?{" "}
              <span>
                <Link href={"/login"}>Login</Link>
              </span>
            </p>
            <div className="login-wrapper">
              <div className="login-header d-flex align-items-center mb-3">
                <Link href="/login">
                  <div
                    className={`login-list-item ${
                      currentPathname === "/login" ? "active" : ""
                    }`}
                  >
                    <button className="login-btn">Login</button>
                  </div>
                </Link>
                <Link href="/register">
                  <div
                    className={`login-list-item ${
                      currentPathname === "/register" ? "active" : ""
                    }`}
                  >
                    <button className="login-btn">Sign Up</button>
                  </div>
                </Link>
              </div>
              <div className="input-fulid-item">
                <label>Full Name</label>
                <input
                  type="text"
                  name="name"
                  onChange={handleInputChange}
                  placeholder="Enter Your Full Name"
                  required
                />
              </div>
              <div className="input-fulid-item">
                <label>Email</label>
                <input
                  type="email"
                  name="email"
                  placeholder="Enter Your Email"
                  required
                  onChange={handleInputChange}
                />
              </div>
              <div className="input-fulid-item">
                <label>Password:</label>
                <input
                  type="password"
                  name="password"
                  onChange={handleInputChange}
                  placeholder="Enter Your Password"
                  required
                />
              </div>
              <div className="input-fulid-item-checkbox">
                <label>
                  <input type="checkbox" /> I agree to the Terms of Service,
                  General{" "}
                  <span>
                    <Link target="_blank" href="/terms">
                      Terms and Conditions
                    </Link>
                  </span>{" "}
                  and{" "}
                  <span>
                    <Link target="_blank" href="/privacy-policy">
                      Privacy Policy
                    </Link>
                  </span>{" "}
                  .
                </label>
              </div>
              <button onClick={handleRegister} className="custom-btn mb-3">
                <span>Sign Up</span>{" "}
              </button>
              {message && <p>{message}</p>}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

Register.layout = AppLayout;
export default Register;

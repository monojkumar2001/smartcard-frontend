import { useState } from "react";
import { useRouter } from "next/router";
import axios from "axios";
import AppLayout from "../components/Layout/Layout";
import Link from "next/link";

const apiUrl = process.env.NEXT_PUBLIC_API_BASE_URL;

const Login = () => {
    const router = useRouter();
    const currentPathname = router.pathname;

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleLogin = async () => {
    try {
      setLoading(true);

      const response = await axios.post(`${apiUrl}/api/login`, formData);

      // Assuming your server returns a token upon successful login
      const { token } = response.data;

      // Save the token to localStorage or a state management solution
      localStorage.setItem("token", token);
      console.log("user login success!");
      // Redirect the user to the dashboard or any protected route
      router.push("/dashboard");
    } catch (error) {
      console.error("Login failed", error);

      // Check if the error message indicates unverified account
      if (
        error.response &&
        error.response.data.error === "Account not verified"
      ) {
        setMessage(
          "Account not verified. Please check your email for verification."
        );
      } else {
        setMessage("Invalid credentials. Please try again.");
      }
    } finally {
      setLoading(false);
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
            <h1>Log into your account</h1>
            <p className="login-dis-text">
              Don’t have an account? {' '}
              <span>
                <Link href={"/register"}> Sign Up</Link>
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
              <button
                type="button"
                onClick={handleLogin}
                disabled={loading}
                className="custom-btn mb-3"
              >
                <span> {loading ? "Logging in..." : "Login"}</span>
              </button>
              {message && <p>{message}</p>}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
Login.layout = AppLayout;

export default Login;

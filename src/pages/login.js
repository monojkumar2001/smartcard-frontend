import { useState } from "react";
import { useRouter } from "next/router";
import axios from "axios";
import AppLayout from "../components/Layout/Layout";
import Link from "next/link";
import { useAuth } from "./auth/authContext";
const apiUrl = process.env.NEXT_PUBLIC_API_BASE_URL;
const setCookie = (name, value, days) => {
  const expirationDate = new Date();
  expirationDate.setDate(expirationDate.getDate() + days);

  const cookieValue = `${name}=${value}; expires=${expirationDate.toUTCString()}; path=/`;

  document.cookie = cookieValue;
};

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const router = useRouter();
  const { login } = useAuth();
  const currentPathname = router.pathname;
  const [message, setMessage] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const response = await axios.post("http://localhost:8000/api/login", {
        email,
        password,
      });
      const { user, token } = response.data;
      login(token);

      setCookie("token", token, 1);

      router.push("/dashboard");
    } catch (error) {
      setError("Invalid email or password");
      console.error("Login failed", error);
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
              Don’t have an account?{" "}
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
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <div className="input-fulid-item">
                <label>Password:</label>
                <input
                  type="password"
                  name="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
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
              <div className="input-fulid-item-checkbox">
                <Link href={"/forgot-password"}>Forgot Password Account</Link>
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

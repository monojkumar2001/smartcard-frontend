import { useState } from "react";
import { useRouter } from "next/router";
import axios from "axios";
import AppLayout from "../components/Layout/Layout";

const apiUrl = process.env.NEXT_PUBLIC_API_BASE_URL;

const Login = () => {
  const router = useRouter();
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
    <div className="cmt-8">
      <h1>Login</h1>
      <div>
        <label>Email:</label>
        <input type="email" name="email" onChange={handleInputChange} />
      </div>
      <div>
        <label>Password:</label>
        <input type="password" name="password" onChange={handleInputChange} />
      </div>
      <button type="button" onClick={handleLogin} disabled={loading}>
        {loading ? "Logging in..." : "Login"}
      </button>
      {message && <p>{message}</p>}
    </div>
  );
};
Login.layout = AppLayout;

export default Login;

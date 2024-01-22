import { useState } from "react";
import axios from "axios";
import { useRouter } from "next/router";
import Head from "next/head";
import AppLayout from "../components/Layout/Layout";

const apiUrl = process.env.NEXT_PUBLIC_API_BASE_URL;

const Register = () => {
  const router = useRouter();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const [message, setMessage] = useState(""); // Initialize message state

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  //   console.log("API URL:", apiUrl);

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

        // Add a log to check if this point is reached
        console.log("Redirecting to email verification page");

        const email = encodeURIComponent(formData.email); // Encode the email for URL

        router.push(`/verify-email?email=${email}`);
      }
    } catch (error) {
      console.error("Registration failed", error);
      setMessage("Registration failed. Please try again.");
    }
  };

  return (
    <div className="cmt-8">
      <h1>Registration</h1>
      <div>
        <label>Name:</label>
        <input type="text" name="name" onChange={handleInputChange} />
      </div>
      <div>
        <label>Email:</label>
        <input type="email" name="email" onChange={handleInputChange} />
      </div>
      <div>
        <label>Password:</label>
        <input type="password" name="password" onChange={handleInputChange} />
      </div>
      <button onClick={handleRegister}>Register</button>
      {message && <p>{message}</p>}
    </div>
  );
};

Register.layout = AppLayout;
export default Register;

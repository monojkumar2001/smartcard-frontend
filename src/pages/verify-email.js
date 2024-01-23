import { useState } from "react";
import { useRouter } from "next/router";
import axios from "axios";
import AppLayout from "../components/Layout/Layout";

const apiUrl = process.env.NEXT_PUBLIC_API_BASE_URL;

const VerifyEmail = () => {
  const router = useRouter();
  const { email } = router.query;

  const [formData, setFormData] = useState({
    verification_code: "",
    email,
  });

  const [message, setMessage] = useState("");

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  const handleRegister = async () => {
    try {
      const response = await axios.post(`${apiUrl}/api/auth/verify`, formData);
      setMessage(response.data.message);
      if (response.data.message.includes("Registration successful")) {
        router.push(`/login`);
      }
    } catch (error) {
      console.error("Registration failed", error);
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
            <h1>Verify Your Email Account</h1>
            {formData.email}
            {formData.verification_code}
            <div className="login-wrapper">
              <div className="input-fulid-item">
                <label>Verification Code</label>
                <input
                  type="text"
                  name="verification_code"
                  placeholder="Enter Your Verification Code"
                  onChange={handleInputChange}
                />
              </div>
              <button onClick={handleRegister} className="custom-btn mb-3">
                <span>Sign Up</span>
              </button>
              {message && <p>{message}</p>}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

VerifyEmail.layout = AppLayout;

export default VerifyEmail;

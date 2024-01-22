// pages/verify-email.js

import { useState } from "react";
import { useRouter } from "next/router";
import axios from "axios";
import AppLayout from "../components/Layout/Layout";

const apiUrl = process.env.NEXT_PUBLIC_API_BASE_URL;

const VerifyEmail = () => {
  const router = useRouter();
  const { email } = router.query; // Get email from the query parameters

  const [verificationCode, setVerificationCode] = useState("");
  const [message, setMessage] = useState("");

  const handleVerification = async () => {
    try {
      if (email && verificationCode) {
        const response = await axios.post(`${apiUrl}/api/auth/verify`, {
          email,
          code: verificationCode,
        });
        setMessage(response.data.message);
      } else {
        setMessage("Invalid verification code.");
      }
    } catch (error) {
      if (error.response.status === 422) {
        setMessage("Invalid verification code. Please try again.");
      } else {
        setMessage("An unexpected error occurred. Please try again later.");
      }
    }
  };

  return (
    <div>
      <h1>Email Verification</h1>
      <p>Email: {email}</p>
      <div>
        <label>Verification Code:</label>
        <input
          type="text"
          value={verificationCode}
          onChange={(e) => setVerificationCode(e.target.value)}
        />
      </div>
      <button onClick={handleVerification}>Verify Email</button>
      {message && <p>{message}</p>}
    </div>
  );
};

VerifyEmail.layout = AppLayout;

export default VerifyEmail;

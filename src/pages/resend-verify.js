import { useState } from "react";
import AppLayout from "../components/Layout/Layout";
import Link from "next/link";
import axios from "axios";
import { useRouter } from "next/router";
const ResendVerifyPage = () => {
  // ===== Step ===========
  const [currentStep, setCurrentStep] = useState(1);
  const nextStep = () => {
    setCurrentStep(currentStep + 1);
  };
  return (
    <>
      <div className="login-page cpt-6 cpb-7">
        <div className="container">
          {currentStep === 1 && (
            <>
              <div className="login-content">
                <div className="logo-img d-flex align-items-center justify-content-center mb-3 ">
                  <img src="/assets/img/logo/logo.svg" alt="" />
                </div>
                <div className="login-wrapper-forget">
                  <h1>Resend Verify Email</h1>
                  <p className="login-dis-text">
                    Fear not. We’ll email you instructions to resend your Email.
                  </p>
                  <div className="input-fulid-item mt-3">
                    <label>Resen Email</label>
                    <input
                      type="email"
                      name="email"
                      placeholder="Enter Your Forgot Email"
                      required
                    />
                  </div>
                  <button onClick={nextStep} className="custom-btn mt-2 mb-3">
                    <span>Send</span>{" "}
                  </button>
                </div>
              </div>
            </>
          )}
          {currentStep === 2 && (
            <>
              <div className="login-content">
                <div className="logo-img d-flex align-items-center justify-content-center mb-3 ">
                  <img src="/assets/img/logo/logo.svg" alt="" />
                </div>
                <div className="login-wrapper-forget">
                  <h1>Email Verify Code</h1>
                  <div className="input-fulid-item">
                    <label>Your Code</label>
                    <input
                      type="text"
                      name="verify_code"
                      placeholder="Enter Your Code"
                      required
                    />
                  </div>
                  <button onClick={nextStep} className="custom-btn mb-3">
                    <span>Send</span>{" "}
                  </button>
                </div>
              </div>
            </>
          )}
        </div>
      </div>
    </>
  );
};

ResendVerifyPage.layout = AppLayout;
export default ResendVerifyPage;

import React, { useState } from "react";
import Logo from "../assets/logo.png";
import GoogleSvg from "../assets/icons8-google.svg";
import { FaEye, FaEyeSlash } from "react-icons/fa6";

const Login = () => {
  const [showPassword1, setShowPassword1] = useState(false);
  const [showPassword2, setShowPassword2] = useState(false);

  return (
    <div className="login-main">
      <div className="login-left">
        <img src={Logo} alt="Logo" />
      </div>
      <div className="login-right">
        <div className="login-right-container">
          <div className="login-center">
            <h2>Welcome!</h2>
            <p>Please enter your details</p>
            <form>
              <input type="text" placeholder="Name" />
              <input type="email" placeholder="Email" />

              {/* Password Field 1 */}
              <div className="pass-input-div">
                <input
                  type={showPassword1 ? "text" : "password"}
                  placeholder="Password"
                />
                <span className="icon" onClick={() => setShowPassword1(!showPassword1)}>
                  {showPassword1 ? <FaEyeSlash /> : <FaEye />}
                </span>
              </div>

              {/* Password Field 2 */}
              <div className="pass-input-div">
                <input
                  type={showPassword2 ? "text" : "password"}
                  placeholder="Confirm Password"
                />
                <span className="icon" onClick={() => setShowPassword2(!showPassword2)}>
                  {showPassword2 ? <FaEyeSlash /> : <FaEye />}
                </span>
              </div>

              <div className="login-center-buttons">
                <button type="button">Sign Up</button>
                <button type="button">
                  <img src={GoogleSvg} alt="Google Logo" />
                  Log In with Google
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;

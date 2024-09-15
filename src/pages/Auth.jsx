import React from "react";

const Auth = () => {
  return (
    <div className="wrapper">
      <span className="rotate-bg"></span>
      <span className="rotate-bg2"></span>

      <div className="form-box login">
        <h2 className="title animation">Login</h2>
        <form action="#">
          <div className="input-box animation">
            <input type="text" required />
            <label for="">Username</label>
            <i className="bx bxs-user"></i>
          </div>

          <div className="input-box animation">
            <input type="password" required />
            <label for="">Password</label>
            <i className="bx bxs-lock-alt"></i>
          </div>
          <button type="submit" className="btn animation">
            Login
          </button>
          <div className="linkTxt animation">
            <p>
              Don't have an account?{" "}
              <a href="#" className="register-link">
                Sign Up
              </a>
            </p>
          </div>
        </form>
      </div>

      <div className="info-text login">
        <h2 className="animation" style="--i:0; --j:20">
          Welcome Back!
        </h2>
        <p className="animation" style="--i:1; --j:21">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti,rem?
        </p>
      </div>
    </div>
  );
};

export default Auth;

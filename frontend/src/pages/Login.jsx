import React from "react";
import "../App.css";
import Header from "../components/Header";

function Login() {
  return (
    <div>
      <Header />

      <section className="content-section">
        <h2>Login</h2>

        <form className="form-box">
          <input type="email" placeholder="Enter Email" required />
          <input type="password" placeholder="Enter Password" required />
          <button type="submit">Login</button>
        </form>
      </section>
    </div>
  );
}

export default Login;

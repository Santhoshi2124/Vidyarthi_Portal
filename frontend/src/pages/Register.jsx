import React from "react";
import "../App.css";
import Header from "../components/Header";

function Register() {
  return (
    <div>
      <Header />

      <section className="content-section">
        <h2>Register</h2>

        <form className="form-box">
          <input type="text" placeholder="Full Name" required />
          <input type="email" placeholder="Email" required />
          <input type="password" placeholder="Password" required />
          <button type="submit">Register</button>
        </form>
      </section>
    </div>
  );
}

export default Register;

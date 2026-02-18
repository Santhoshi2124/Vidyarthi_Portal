import React from "react";
import "../App.css";
import Header from "../components/Header";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

function Feedback() {
  return (
    <div>
      <Header />
      <Navbar />

      <section className="content-section">
        <h2>Student Feedback</h2>

        <form className="form-box">
          <input type="text" placeholder="Your Name" required />
          <input type="text" placeholder="Your Feedback" required />
          <button type="submit">Submit Feedback</button>
        </form>
      </section>

      <Footer />
    </div>
  );
}

export default Feedback;

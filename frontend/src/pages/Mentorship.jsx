import React from "react";
import "../App.css";
import Header from "../components/Header";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

function Mentorship() {
  return (
    <div>
      <Header />
      <Navbar />

      <section className="content-section">
        <h2>Mentorship Sessions</h2>
        <div className="grid">
          <div className="box"></div>
          <div className="box"></div>
          <div className="box"></div>
          <div className="box"></div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

export default Mentorship;

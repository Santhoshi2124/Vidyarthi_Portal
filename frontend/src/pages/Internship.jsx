import React from "react";
import "../App.css";
import Header from "../components/Header";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

function Internship() {
  return (
    <div>
      <Header />
      <Navbar />

      <section className="content-section">
        <h2>Internship Opportunities</h2>
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

export default Internship;

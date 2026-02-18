import React from "react";
import "../App.css";
import Header from "../components/Header";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

function Career() {
  return (
    <div>
      <Header />
      <Navbar />

      <section className="content-section">
        <h2>Career Guidance</h2>
        <p style={{ marginTop: "20px" }}>
          This page will contain career tips, roadmaps, and guidance.
        </p>
      </section>

      <Footer />
    </div>
  );
}

export default Career;

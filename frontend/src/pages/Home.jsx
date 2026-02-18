    import React from "react";
import "../App.css";
import Header from "../components/Header";
import Navbar from "../components/Navbar";
import Slider from "../components/Slider";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div>
      <Header />
      <Navbar />
      <Slider />

      {/* SERVICES */}
      <section className="services">
        <div className="service-card">
          <h3>Internship</h3>
          <p><Link to="/internship">Read More...</Link></p>
        </div>

        <div className="service-card">
          <h3>Training</h3>
          <p><Link to="/training">Read More...</Link></p>
        </div>

        <div className="service-card">
          <h3>Mentorship</h3>
          <p><Link to="/mentorship">Read More...</Link></p>
        </div>

        <div className="service-card">
          <h3>Career Guidance</h3>
          <p><Link to="/career">Read More...</Link></p>
        </div>
      </section>

      {/* INTERNSHIP */}
      <section className="content-section">
        <h2>Latest Popular Internship</h2>
        <div className="grid">
          <div className="box"></div>
          <div className="box"></div>
          <div className="box"></div>
          <div className="box"></div>
        </div>
      </section>

      {/* TRAINING */}
      <section className="content-section">
        <h2>Latest Popular Training Courses</h2>
        <div className="grid">
          <div className="box"></div>
          <div className="box"></div>
          <div className="box"></div>
          <div className="box"></div>
        </div>
      </section>

      {/* MENTORSHIP */}
      <section className="content-section">
        <h2>Latest Mentorship Sessions</h2>
        <div className="grid">
          <div className="box"></div>
          <div className="box"></div>
          <div className="box"></div>
          <div className="box"></div>
        </div>
      </section>

      {/* FELLOWSHIP */}
      <section className="content-section">
        <h2>Latest Popular Fellowship</h2>
        <div className="grid">
          <div className="box"></div>
          <div className="box"></div>
          <div className="box"></div>
          <div className="box"></div>
        </div>
      </section>

      {/* FEEDBACK */}
      <section className="feedback">
        <h2>Students Voice/Feedback</h2>
        <div className="feedback-grid">
          <div className="feedback-box">Photo & Message</div>
          <div className="feedback-box">Video Message</div>
        </div>
      </section>

      {/* PARTNERS */}
      <section className="partners">
        <h2>Partner's / Support Organizations</h2>
        <div className="partner-row">
          <span>Logo</span>
          <span>Logo</span>
          <span>Logo</span>
          <span>Logo</span>
          <span>Logo</span>
          <span>Logo</span>
          <span>Logo</span>
          <span>Logo</span>
        </div>
      </section>

      <Footer />
    </div>
  );
}

export default Home;
    
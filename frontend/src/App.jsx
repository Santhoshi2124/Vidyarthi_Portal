import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Internship from "./pages/Internship";
import Training from "./pages/Training";
import Mentorship from "./pages/Mentorship";
import Career from "./pages/Career";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Feedback from "./pages/Feedback";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/internship" element={<Internship />} />
        <Route path="/training" element={<Training />} />
        <Route path="/mentorship" element={<Mentorship />} />
        <Route path="/career" element={<Career />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/feedback" element={<Feedback />} />
      </Routes>
    </Router>
  );
}

export default App;

import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Nav from "./components/Nav";
import Footer from "./components/Footer";
import Homepage from "./components/Homepage";  
import About from "./components/About";        
import Ambulance from "./components/Ambulance";
import Services from "./components/Services";
import Contact from "./components/Contact"; 
import Appointment from "./components/Appointment";  

function App() {
  return (
    <Router>
      <Nav />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/about" element={<About />} />
        <Route path="/ambulance" element={<Ambulance />} />
        <Route path="/services" element={<Services />} />
        <Route path="/contact" element={<Contact />} /> 
        <Route path="/appointment" element={<Appointment />} /> 
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;

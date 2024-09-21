import React from "react";
import { FaPhoneAlt, FaMapMarkerAlt } from "react-icons/fa";
import { Link } from "react-router-dom";
import '../App.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-left">
        <h4><FaMapMarkerAlt /> Address:</h4>
        <p>Pune - 411001, Maharashtra, India</p>
        <h4>Appointment Desk is Operational From:</h4>
        <p>8 AM to 8 PM (Monday to Saturday) and Sunday 8 AM to 6 PM</p>
        <p>(We offer round-the-clock healthcare services.)</p>
      </div>

      <div className="footer-center">
        <h4>Visiting Hours</h4>
        <p><strong>OPD:</strong> 8 AM to 8 PM</p>
        <p><strong>Inpatient:</strong> 11 AM to 1 PM, 5 PM to 7 PM</p>
        <p><strong>ICU:</strong> 11 AM to 1 PM</p>
      </div>

      <div className="footer-right">
        <div className="footer-contact">
          <FaPhoneAlt /> <span>Call us: +91-1234567890</span>
        </div>
        <div className="footer-links">
          <ul>
            {/* Link to the same About page as the navbar */}
            <li><Link to="/about">About Us</Link></li>
            <li><Link to="/contact">Contact Us</Link></li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

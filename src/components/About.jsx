import React from "react";
import { FaHospitalAlt, FaHeartbeat } from "react-icons/fa"; // Importing icons
import { GiHealthNormal } from "react-icons/gi";
import { MdLocalHospital } from "react-icons/md";

const About = () => {
  return (
    <div className="about-container">
      <section className="about-header">
        <FaHospitalAlt className="hospital-icon" />
        <h1>Welcome to Healing-Hands Hospital</h1>
        <p className="about-intro">
          The Best Medical Service of Pune City. Check Our All Features.<br />
          Welcome to our new application. We encourage you to find out more about the values and vision that guides us, the services and programs we offer, and the indicators that ensure our continued accountability and transparency. We aim to keep you well informed and offer access to general healthcare information.
        </p>
      </section>

      <section className="about-section">
        <div className="vision">
          <GiHealthNormal className="icon" />
          <h2>Our Vision</h2>
          <p>
            To provide each patient with the world-class care, exceptional service, and compassion we would want for our loved ones. To lead the evolution of healthcare, enabling every member of the communities we serve to enjoy a better, healthier life.
          </p>
        </div>

        <div className="mission">
          <MdLocalHospital className="icon" />
          <h2>Our Mission</h2>
          <p>
            The mission of Healing-Hands Hospital is to provide quality health services and facilities for the community, promote wellness, relieve suffering, and restore health as swiftly, safely, and humanely as possible. We offer the best service at the highest value, with a proud tradition of care for the people of Pune and surrounding communities.
          </p>
        </div>
      </section>

      <section className="about-values">
        <FaHeartbeat className="icon" />
        <h2>Why Choose Us?</h2>
        <p>
          Healing-Hands Hospital offers top-notch healthcare services to both residents and visitors in Pune. With state-of-the-art technology, compassionate care, and a commitment to excellence, we aim to provide the best medical services possible.
        </p>
      </section>
    </div>
  );
};

export default About;

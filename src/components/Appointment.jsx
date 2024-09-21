import React, { useState } from "react";

const Appointment = () => {
  const [isNewPatient, setIsNewPatient] = useState(false);

  const handleToggle = () => {
    setIsNewPatient(!isNewPatient);
  };

  return (
    <div className="appointment-page"> {/* Add this class here */}
      <div className="appointment-container">
        <h2>{isNewPatient ? "New Patient Registration" : "Patient Login"}</h2>
        <form>
          {isNewPatient && (
            <div className="form-group">
              <label htmlFor="name">Name:</label>
              <input type="text" id="name" name="name" required />
            </div>
          )}
          <div className="form-group">
            <label htmlFor="email">Email:</label>
            <input type="email" id="email" name="email" required />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password:</label>
            <input type="password" id="password" name="password" required />
          </div>
          <button type="submit">{isNewPatient ? "Register" : "Login"}</button>
        </form>
        <button className="toggle-btn" onClick={handleToggle}>
          {isNewPatient ? "Already have an account? Login" : "New here? Register"}
        </button>
      </div>
    </div>
  );
};

export default Appointment;

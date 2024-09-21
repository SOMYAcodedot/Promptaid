import React from "react";
import Typewriter from "typewriter-effect";

const Type = () => {
  return (
    <div className="typewriter-effect">
      <Typewriter
        options={{
          strings: [
            "Experienced Doctors",
            "Best Healthcare Services",
            "Best Room Categories",
            "Wellness Center",
            "Supportive Staff",
          ],
          autoStart: true,
          loop: true,
          delay: 70,
          deleteSpeed: 20,
        }}
      />
    </div>
  );
};

export default Type;

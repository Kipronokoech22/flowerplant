import React from "react";
import manImage from "../assets/images/man.png"; // Import left image
import womanImage from "../assets/images/woman.png"; // Import right image
import "./About.css"; // Import styles

function About() {
  return (
    <div className="about-page">
      {/* Hero Section */}
      <div className="about-hero">
        <div className="hero-images">
          <img
            src={manImage}
            alt="Man gardening in field"
            className="hero-image-left"
          />
          <img
            src={womanImage}
            alt="Woman with sunflowers"
            className="hero-image-right"
          />
        </div>
      </div>
    </div>
  );
}

export default About;
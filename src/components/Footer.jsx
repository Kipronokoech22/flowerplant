import React from "react";
import "./Footer.css";
import instagramIcon from "../assets/images/instagram.png"; 
import facebookIcon from "../assets/images/facebook.png"; 
import linkedinIcon from "../assets/images/linkedin.png"; 

function Footer() {
  return (
    <footer className="about-footer">
      <div className="footer-content">
        {/* Top Row */}
        <div className="footer-top">
          {/* Left Column - FlowerPlant */}
          <div className="footer-column left">
            <h3>FlowerPlant</h3>
            <p>
              Address: 123 Botanical Lane,<br />
              Green City, 2345 Copenhagen, Denmark
            </p>
          </div>

          {/* Right Column - Contact us */}
          <div className="footer-column right">
            <h3>Contact us</h3>
            <p>
              Email: flowerplant123@flowerplant2026.dk<br />
              Mobile: +4520766765
            </p>
          </div>
        </div>

        {/* Bottom Row - Follow */}
        <div className="footer-bottom">
          <h3>Follow</h3>
          <div className="social-icons">
            <a href="#" className="social-icon instagram">
              <img src={instagramIcon} alt="Instagram" />
            </a>
            <a href="#" className="social-icon facebook">
              <img src={facebookIcon} alt="Facebook" />
            </a>
            <a href="#" className="social-icon linkedin">
              <img src={linkedinIcon} alt="LinkedIn" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
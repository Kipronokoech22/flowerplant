import { useNavigate } from "react-router-dom";
import hero from "../assets/images/hero.png";
import "./home.css";

function Home() {
  // Initialize the navigate hook
  const navigate = useNavigate();

  const handleButtonClick = () => {
    navigate("/my-plants"); // Redirect to the My Plants page
  };

  return (
    <section className="home-hero">
      <img src={hero} alt="Plant in hands" className="hero-image" />

      <div className="hero-text">
        <h1 className="welcome-title">
          WELC<br />OME
        </h1>

        <p className="tagline">Let's grow together</p>

        <button className="cta-button" onClick={handleButtonClick}>
          LEARN MORE HERE
        </button>
      </div>
    </section>
  );
}

export default Home;
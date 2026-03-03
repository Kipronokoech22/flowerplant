import React, { useState } from "react";
import plantsBanner from "../assets/images/plants-banner.png"; // Correct banner image
import "./MyPlants.css";

function MyPlants() {
  const [plants, setPlants] = useState([
    {
      id: 1,
      commonName: "Snake plant",
      scientificName: "Sansevieria trifasciata",
      light: "Low to bright indirect light",
      watering: "Every 2-3 weeks",
      soil: "Well-draining cactus or succulent mix",
      level: "Beginner",
    },
    {
      id: 2,
      commonName: "Spider Plant",
      scientificName: "Chlorophytum comosum",
      light: "Bright, indirect sunlight",
      watering: "Every 1-2 weeks",
      soil: "Well-draining potting mix",
      level: "Intermediate",
    },
    {
      id: 3,
      commonName: "Fiddle-Leaf Fig",
      scientificName: "Ficus lyrata",
      light: "Bright, indirect light (6+ hrs)",
      watering: "When top 2-3 inches of soil are dry",
      soil: "Well-draining, peat-based mix with perlite",
      level: "Expert",
    },
  ]);

  const handleDelete = (id) => {
    setPlants(plants.filter((plant) => plant.id !== id));
  };

  return (
    <div className="my-plants">
      {/* Banner Section */}
      <div className="plants-hero">
        <img src={plantsBanner} alt="Greenhouse plants banner" className="hero-image" />
      </div>

      {/* Search and Create Section */}
      <div className="search-create-section">
        <input
          type="text"
          className="search-bar"
          placeholder="Search your plants..."
        />
        <button className="create-btn">Create</button>
      </div>

      {/* Plants Table */}
      <div className="plants-table">
        <table>
          <thead>
            <tr>
              <th>Common name</th>
              <th>Scientific name</th>
              <th>Light</th>
              <th>Watering</th>
              <th>Soil</th>
              <th>Level</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {plants.map((plant) => (
              <tr key={plant.id}>
                <td>{plant.commonName}</td>
                <td>{plant.scientificName}</td>
                <td>{plant.light}</td>
                <td>{plant.watering}</td>
                <td>{plant.soil}</td>
                <td>{plant.level}</td>
                <td>
                  <button
                    className="delete-btn"
                    onClick={() => handleDelete(plant.id)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default MyPlants;
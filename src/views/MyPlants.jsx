import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import PlantItem from "../components/PlantItem";
import SearchField from "../components/SearchField";
import "./MyPlants.css";

function MyPlants() {
  // State that stores plants loaded from localStorage
  const [plants, setPlants] = useState(() => {
    const savedPlants = localStorage.getItem("plants");
    return savedPlants ? JSON.parse(savedPlants) : [];
  });

  // State used for the search filter
  const [filter, setFilter] = useState("");

  // Save plants to localStorage whenever the plants state changes
  useEffect(() => {
    localStorage.setItem("plants", JSON.stringify(plants));
  }, [plants]);

  // Function to delete a plant
  function deletePlant(id) {
    if (window.confirm("Delete this plant?")) {
      setPlants(plants.filter((plant) => plant.id !== id));
    }
  }

  // Filter plants based on the search input
  const filteredPlants = plants.filter((plant) =>
    plant.name.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <section className="container">
      <div className="row">
        <h2>My Plants</h2>

        <Link className="button" to="/create">
          + Create New Plant
        </Link>
      </div>

      {/* Search field component */}
      <SearchField
        value={filter}
        onChange={(e) => setFilter(e.target.value)}
        placeholder="Search your plants..."
      />

      {/* Plant list */}
      <div className="plants-grid">
        {filteredPlants.length === 0 ? (
          <p className="muted">No plants found.</p>
        ) : (
          filteredPlants.map((plant) => (
            <PlantItem
              key={plant.id}
              plant={plant}
              onDelete={deletePlant}
            />
          ))
        )}
      </div>
    </section>
  );
}

export default MyPlants;
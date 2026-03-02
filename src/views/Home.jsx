// src/views/Home.jsx
import "./Home.css";

function Home() {
  const examplePlants = [
    { id: 1, name: "Snake Plant", light: "Low to bright indirect light", watering: "Every 2–3 weeks", soilType: "Well-draining", level: "Beginner" },
    { id: 2, name: "Spider Plant", light: "Bright indirect light", watering: "Every 1–2 weeks", soilType: "Well-draining", level: "Intermediate" },
    { id: 3, name: "Fiddle Leaf Fig", light: "Bright indirect light", watering: "When top soil is dry", soilType: "Rich, well-draining", level: "Expert" },
  ];

  return (
    <>
      {/* BANNER */}
      <div className="hero">
        <div className="hero-overlay">
          <div className="hero-text">
            <h1>FlowerPlant</h1>
            <p>Your space for plant care and collections</p>
          </div>
        </div>
      </div>

      {/* CONTENT */}
      <section className="container">
        <h2>Welcome to FlowerPlant 🌿</h2>
        
        <h4>
          FlowerPlant is a community for plant enthusiasts, gardeners, and beginners
          looking to learn about plant care. The platform provides a simple website
          where users can explore plant guides and manage their personal collections.
        </h4>

        <h3>Example plant guides</h3>

        <div className="grid">
          {examplePlants.map((plant) => (
            <div key={plant.id} className="card">
              <h4>{plant.name}</h4>
              <p><strong>Light:</strong> {plant.light}</p>
              <p><strong>Watering:</strong> {plant.watering}</p>
              <p><strong>Soil type:</strong> {plant.soilType}</p>
              <p><strong>Level:</strong> {plant.level}</p>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}

export default Home;
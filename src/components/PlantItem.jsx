// src/components/PlantItem.jsx

import { Link } from "react-router-dom";

function PlantItem({ plant, onDelete }) {
  return (
    <div className="card">
      <h4>{plant.name}</h4>
      <p><strong>Light:</strong> {plant.light}</p>
      <p><strong>Watering:</strong> {plant.watering}</p>
      <p><strong>Level:</strong> {plant.level}</p>
      <Link to={`/update/${plant.id}`}>Update</Link>{" "}
      <button onClick={() => onDelete(plant.id)}>Delete</button>
    </div>
  );
}

export default PlantItem;
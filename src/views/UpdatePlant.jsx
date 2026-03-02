// src/views/UpdatePlant.jsx
import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import './UpdatePlant.css';

function UpdatePlant() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [plants, setPlants] = useState([]);
  const [name, setName] = useState("");
  const [light, setLight] = useState("");
  const [watering, setWatering] = useState("");
  const [level, setLevel] = useState("Beginner");

  useEffect(() => {
    const saved = JSON.parse(localStorage.getItem("plants") || "[]");
    setPlants(saved);

    const plant = saved.find(p => p.id === Number(id));
    if (plant) {
      setName(plant.name);
      setLight(plant.light);
      setWatering(plant.watering);
      setLevel(plant.level);
    }
  }, [id]);

  function handleSubmit(e) {
    e.preventDefault();
    const updatedPlant = { id: Number(id), name, light, watering, level };
    const updatedList = plants.map(p => p.id === Number(id) ? updatedPlant : p);
    localStorage.setItem("plants", JSON.stringify(updatedList));
    navigate("/my-plants");
  }

  return (
    <section>
      <h2>Update Plant</h2>
      <form onSubmit={handleSubmit}>
        <input value={name} onChange={e => setName(e.target.value)} required />
        <input value={light} onChange={e => setLight(e.target.value)} required />
        <input value={watering} onChange={e => setWatering(e.target.value)} required />
        <select value={level} onChange={e => setLevel(e.target.value)}>
          <option>Beginner</option>
          <option>Intermediate</option>
          <option>Expert</option>
        </select>
        <button type="submit">Update</button>
      </form>
    </section>
  );
}

export default UpdatePlant;
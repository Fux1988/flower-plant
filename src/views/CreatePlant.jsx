// src/views/CreatePlant.jsx
import { useState } from "react";
import { useNavigate } from "react-router-dom";
// 
import './CreatePlant.css';

function CreatePlant() {
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [light, setLight] = useState("");
  const [watering, setWatering] = useState("");
  const [level, setLevel] = useState("Beginner");

  function handleSubmit(e) {
    e.preventDefault();
    const saved = JSON.parse(localStorage.getItem("plants") || "[]");

    const newPlant = {
      id: saved.length > 0 ? Math.max(...saved.map(p => p.id)) + 1 : 1,
      name,
      light,
      watering,
      level
    };

    localStorage.setItem("plants", JSON.stringify([...saved, newPlant]));
    navigate("/my-plants");
  }

  return (
    <section>
      <h2>Create Plant</h2>
      <form onSubmit={handleSubmit}>
        <input placeholder="Plant name" value={name} onChange={e => setName(e.target.value)} required />
        <input placeholder="Light requirements" value={light} onChange={e => setLight(e.target.value)} required />
        <input placeholder="Watering" value={watering} onChange={e => setWatering(e.target.value)} required />
        <select value={level} onChange={e => setLevel(e.target.value)}>
          <option>Beginner</option>
          <option>Intermediate</option>
          <option>Expert</option>
        </select>
        <button type="submit">Create</button>
      </form>
    </section>
  );
}

export default CreatePlant;
import { NavLink } from "react-router-dom";


export default function Header() {
  return (
    <header>
      <nav>
        <NavLink to="/" end>Home</NavLink>{" | "}
        <NavLink to="/my-plants">My Plants</NavLink>{" | "}
        <NavLink to="/create">Create Plant</NavLink>{" | "}
        <NavLink to="/about">About</NavLink>
      </nav>
    </header>
  );
}
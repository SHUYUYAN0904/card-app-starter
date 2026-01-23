import { NavLink } from "react-router-dom";

export default function Navbar() {
  return (
    <header
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "12px 20px",
        borderBottom: "1px solid #ddd",
      }}
    >
      <strong>Card App</strong>

      <nav style={{ display: "flex", gap: 16 }}>
        <NavLink to="/" end>
          Home
        </NavLink>

        <NavLink to="/cards">
          View Cards
        </NavLink>

        <NavLink to="/cards/new">
          Add Card
        </NavLink>
      </nav>
    </header>
  );
}

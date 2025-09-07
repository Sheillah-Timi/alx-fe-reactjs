import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav
      style={{
        backgroundColor: "#0b3d91", // backgroundColor present
        padding: "12px 20px",
        display: "flex",           // display present
        justifyContent: "space-between", // justifyContent present
        alignItems: "center",
      }}
    >
      <div style={{ display: "flex", gap: "18px", alignItems: "center" }}>
        <Link to="/" style={{ color: "white", textDecoration: "none", fontWeight: 600 }}>
          Home
        </Link>
        <Link to="/about" style={{ color: "white", textDecoration: "none", fontWeight: 600 }}>
          About
        </Link>
        <Link to="/services" style={{ color: "white", textDecoration: "none", fontWeight: 600 }}>
          Services
        </Link>
        <Link to="/contact" style={{ color: "white", textDecoration: "none", fontWeight: 600 }}>
          Contact
        </Link>
      </div>

      <div style={{ color: "white", fontSize: "14px" }}>
        <span>Call us: +254 700 000 000</span>
      </div>
    </nav>
  );
}

export default Navbar;

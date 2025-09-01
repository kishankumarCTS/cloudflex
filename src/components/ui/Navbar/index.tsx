import React from "react";

const Navbar = () => {
  return (
    <nav
      style={{
        height: "64px",
        backgroundColor: "#fff",
        borderBottom: "1px solid #ddd",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "0 24px",
        boxShadow: "0 1px 4px rgba(0, 0, 0, 0.05)",
      }}
    >
      <div style={{ fontWeight: "bold", fontSize: "18px" }}>My App</div>
      <div>
        <span style={{ color: "#666" }}>Welcome, User</span>
      </div>
    </nav>
  );
};

export default Navbar;

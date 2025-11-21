"use client";

import Link from "next/link";

export default function HomePage() {
  return (
    <div
      style={{
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#fff",
        fontFamily: "'Inter', sans-serif",
        textAlign: "center",
        padding: "0 20px",
      }}
    >
      <h1 style={{ fontSize: "4rem", fontWeight: "700", color: "#ff4d4d", marginBottom: "40px" }}>
        AcidTrace
      </h1>

      <div style={{ display: "flex", gap: "20px" }}>
        <Link href="/register">
          <button
            style={{
              padding: "12px 30px",
              backgroundColor: "#ff4d4d",
              color: "#fff",
              fontWeight: "600",
              fontSize: "1rem",
              borderRadius: "8px",
              border: "none",
              cursor: "pointer",
              transition: "background-color 0.2s ease, transform 0.2s ease",
            }}
            onMouseEnter={(e) => {
              e.target.style.backgroundColor = "#e04343";
              e.target.style.transform = "scale(1.05)";
            }}
            onMouseLeave={(e) => {
              e.target.style.backgroundColor = "#ff4d4d";
              e.target.style.transform = "scale(1)";
            }}
          >
            Register
          </button>
        </Link>

        <Link href="/login">
          <button
            style={{
              padding: "12px 30px",
              backgroundColor: "#ffcc00",
              color: "#333",
              fontWeight: "600",
              fontSize: "1rem",
              borderRadius: "8px",
              border: "none",
              cursor: "pointer",
              transition: "background-color 0.2s ease, transform 0.2s ease",
            }}
            onMouseEnter={(e) => {
              e.target.style.backgroundColor = "#e6b800";
              e.target.style.transform = "scale(1.05)";
            }}
            onMouseLeave={(e) => {
              e.target.style.backgroundColor = "#ffcc00";
              e.target.style.transform = "scale(1)";
            }}
          >
            Login
          </button>
        </Link>
      </div>
    </div>
  );
}


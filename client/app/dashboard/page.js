"use client";

import Link from "next/link";

export default function Dashboard() {
  return (
    <div
      style={{
        minHeight: "100vh",
        fontFamily: "'Inter', sans-serif",
        backgroundColor: "#f7f7f7",
        padding: "20px",
      }}
    >
      {/* Header */}
      <header
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          padding: "20px 40px",
          backgroundColor: "#ff4d4d",
          color: "#fff",
          borderRadius: "12px",
          marginBottom: "40px",
        }}
      >
        <h1 style={{ fontSize: "2rem", fontWeight: "700" }}>AcidTrace Dashboard</h1>
        <nav style={{ display: "flex", gap: "20px" }}>
          <Link href="/">
            <button
              style={{
                padding: "8px 16px",
                backgroundColor: "#fff",
                color: "#ff4d4d",
                fontWeight: "600",
                borderRadius: "8px",
                cursor: "pointer",
                border: "none",
                transition: "transform 0.2s",
              }}
              onMouseEnter={e => (e.target.style.transform = "scale(1.05)")}
              onMouseLeave={e => (e.target.style.transform = "scale(1)")}
            >
              Home
            </button>
          </Link>
          <button
            style={{
              padding: "8px 16px",
              backgroundColor: "#fff",
              color: "#ff4d4d",
              fontWeight: "600",
              borderRadius: "8px",
              cursor: "pointer",
              border: "none",
              transition: "transform 0.2s",
            }}
            onClick={() => alert("Logout clicked")}
            onMouseEnter={e => (e.target.style.transform = "scale(1.05)")}
            onMouseLeave={e => (e.target.style.transform = "scale(1)")}
          >
            Logout
          </button>
        </nav>
      </header>

      {/* Main content */}
      <main
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
          gap: "20px",
        }}
      >
        {/* Card example */}
        <div
          style={{
            backgroundColor: "#fff",
            borderRadius: "12px",
            padding: "20px",
            boxShadow: "0 8px 24px rgba(0,0,0,0.05)",
            textAlign: "center",
          }}
        >
          <h2 style={{ fontSize: "1.5rem", fontWeight: "600", marginBottom: "10px" }}>
            Users
          </h2>
          <p style={{ fontSize: "1rem", color: "#666" }}>View all registered users</p>
          <button
            style={{
              marginTop: "15px",
              padding: "8px 16px",
              backgroundColor: "#ffcc00",
              color: "#333",
              fontWeight: "600",
              borderRadius: "8px",
              border: "none",
              cursor: "pointer",
              transition: "transform 0.2s, background-color 0.2s",
            }}
            onMouseEnter={e => {
              e.target.style.transform = "scale(1.05)";
              e.target.style.backgroundColor = "#e6b800";
            }}
            onMouseLeave={e => {
              e.target.style.transform = "scale(1)";
              e.target.style.backgroundColor = "#ffcc00";
            }}
          >
            View
          </button>
        </div>

        <div
          style={{
            backgroundColor: "#fff",
            borderRadius: "12px",
            padding: "20px",
            boxShadow: "0 8px 24px rgba(0,0,0,0.05)",
            textAlign: "center",
          }}
        >
          <h2 style={{ fontSize: "1.5rem", fontWeight: "600", marginBottom: "10px" }}>
            Orders
          </h2>
          <p style={{ fontSize: "1rem", color: "#666" }}>Manage all orders</p>
          <button
            style={{
              marginTop: "15px",
              padding: "8px 16px",
              backgroundColor: "#ffcc00",
              color: "#333",
              fontWeight: "600",
              borderRadius: "8px",
              border: "none",
              cursor: "pointer",
              transition: "transform 0.2s, background-color 0.2s",
            }}
            onMouseEnter={e => {
              e.target.style.transform = "scale(1.05)";
              e.target.style.backgroundColor = "#e6b800";
            }}
            onMouseLeave={e => {
              e.target.style.transform = "scale(1)";
              e.target.style.backgroundColor = "#ffcc00";
            }}
          >
            Manage
          </button>
        </div>

        {/* Add more cards as needed */}
      </main>
    </div>
  );
}

import Link from "next/link";

export default function HomePage() {
  return (
    <div style={{ padding: "40px", fontFamily: "sans-serif" }}>
      <h1>Welcome to IPD AcidTrace</h1>
      <p>This is the default homepage.</p>

      <nav style={{ marginTop: "20px", marginBottom: "20px" }}>
        <a href="/register" style={{ marginRight: "20px" }}>Register</a>
        <a href="/login">Login</a>
      </nav>

      {/* Button that redirects to /register */}
      <Link href="/register">
        <button style={{ padding: "10px 20px", cursor: "pointer" }}>
          Go to Register
        </button>
      </Link>
    </div>
  );
}

import { connectToDatabase } from "@/lib/mongodb";

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ message: "Method not allowed" });
  }

  const { email, password } = JSON.parse(req.body);

  const { db } = await connectToDatabase();

  const user = await db.collection("users").findOne({ email });

  if (!user) {
    return res.status(401).json({ success: false, message: "User not found" });
  }

  if (user.password !== password) {
    // In production, hash and compare passwords instead
    return res.status(401).json({ success: false, message: "Incorrect password" });
  }

  // Login successful
  return res.status(200).json({ success: true, message: "Login successful" });
}

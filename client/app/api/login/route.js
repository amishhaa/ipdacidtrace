import { NextResponse } from "next/server";
import { connectDB } from "@/lib/db";
import User from "@/lib/userModel";

export async function POST(req) {
  try {
    const { email, password } = await req.json();
    await connectDB();

    const user = await User.findOne({ email });

    if (!user) {
      return NextResponse.json(
        { success: false, message: "User not found" },
        { status: 404 }
      );
    }

    // In production, hash passwords and compare using bcrypt
    if (user.password !== password) {
      return NextResponse.json(
        { success: false, message: "Incorrect password" },
        { status: 401 }
      );
    }

    // Login successful → return success and user info
    return NextResponse.json({
      success: true,
      message: "Login successful",
      status: user.status, // optional: useful for role-based redirects
    });
  } catch (err) {
    return NextResponse.json(
      { success: false, message: "Error: " + err.message },
      { status: 500 }
    );
  }
}


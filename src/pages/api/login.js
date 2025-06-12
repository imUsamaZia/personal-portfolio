// pages/api/login.js
import { users, sessions } from "../../lib/authData";

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ message: "Method not allowed" });
  }

  try {
    const { email, password } = req.body;

    if (!email || !password) {
      return res.status(400).json({ message: "Email and password required" });
    }

    const user = users.find(
      (u) => u.email === email && u.password === password
    );

    if (!user) {
      return res.status(401).json({ message: "Invalid credentials" });
    }

    // Create session
    const sessionId = Math.random().toString(36).substring(2);
    sessions[sessionId] = { userId: user.id, email: user.email };

    // Set session cookie
    res.setHeader(
      "Set-Cookie",
      `session=${sessionId}; Path=/; HttpOnly; SameSite=Strict`
    );

    return res.json({
      message: "Login successful!",
      user: { id: user.id, email: user.email },
    });
  } catch (error) {
    console.error("Login error:", error);
    return res.status(500).json({ message: "Something went wrong" });
  }
}

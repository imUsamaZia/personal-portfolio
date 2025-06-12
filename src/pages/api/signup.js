// pages/api/signup.js
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

    if (users.some((user) => user.email === email)) {
      return res.status(409).json({ message: "Email already exists" });
    }

    const newUser = {
      email,
      password, // Still not hashed - FOR DEVELOPMENT ONLY
      id: Date.now().toString(),
    };

    users.push(newUser);

    // Create session
    const sessionId = Math.random().toString(36).substring(2);
    sessions[sessionId] = { userId: newUser.id, email: newUser.email };

    // Set session cookie
    res.setHeader(
      "Set-Cookie",
      `session=${sessionId}; Path=/; HttpOnly; SameSite=Strict`
    );

    return res.status(201).json({
      message: "User created and logged in!",
      user: { id: newUser.id, email: newUser.email },
    });
  } catch (error) {
    console.error("Signup error:", error);
    return res.status(500).json({ message: "Something went wrong" });
  }
}

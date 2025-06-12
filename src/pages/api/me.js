// pages/api/me.js
import { sessions } from "../../lib/authData";

export default async function handler(req, res) {
  const sessionId = req.cookies.session;

  if (!sessionId || !sessions[sessionId]) {
    return res.status(401).json({ message: "Not authenticated" });
  }

  res.json({ user: sessions[sessionId] });
}

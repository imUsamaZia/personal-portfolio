// pages/api/logout.js
import { sessions } from "../../lib/authData";

export default async function handler(req, res) {
  const sessionId = req.cookies.session;

  if (sessionId && sessions[sessionId]) {
    delete sessions[sessionId];
  }

  res.setHeader(
    "Set-Cookie",
    "session=; Path=/; Expires=Thu, 01 Jan 1970 00:00:00 GMT"
  );
  res.json({ message: "Logged out successfully" });
}

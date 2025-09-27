import { ratelimit } from "../config/upstash.js";

const rateLimiter = async (req, res, next) => {
  try {
    const { success } = await ratelimit.limit("global"); // "global" key = all users
    if (!success) {
      return res.status(429).json({ error: "Too many requests" });
    }
    next();
  } catch (error) {
    console.error("Rate limiting error:", error);
    res.status(500).json({ error: "Internal server error" });
  }
};

export default rateLimiter;

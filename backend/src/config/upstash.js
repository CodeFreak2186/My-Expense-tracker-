import { Redis } from "@upstash/redis";
import { Ratelimit } from "@upstash/ratelimit"; 
import dotenv from "dotenv";

dotenv.config();

// Create a Redis instance from environment variables
const redis = Redis.fromEnv();

// Create a rate limiter (100 requests per 60 seconds, global key)
export const ratelimit = new Ratelimit({
  redis: redis,
  limiter: Ratelimit.slidingWindow(100, "60 s"),
  analytics: true, // optional (gives you metrics)
});

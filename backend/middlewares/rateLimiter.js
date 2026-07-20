import rateLimit from "express-rate-limit";
import { RedisStore } from "rate-limit-redis";
import redisClient from "../utils/redisClient.js";

const baseOptions = {
  windowMs: 15 * 60 * 1000,
  max: 10,
  standardHeaders: true,
  legacyHeaders: false,
  message: {
    success: false,
    message: "Too many attempts. Please try again in 15 minutes.",
  },
};

const buildLimiter = (options) => {
  if (redisClient && redisClient.status !== "end") {
    return rateLimit({
      ...options,
      store: new RedisStore({
        sendCommand: (...args) => redisClient.call(...args),
        prefix: "rl:",
      }),
    });
  }
  return rateLimit(options);
};

export const loginLimiter = buildLimiter({ ...baseOptions, max: 10 });
export const registerLimiter = buildLimiter({ ...baseOptions, max: 5 });

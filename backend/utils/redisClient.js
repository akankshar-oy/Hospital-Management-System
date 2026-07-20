import Redis from "ioredis";

let client = null;

if (process.env.REDIS_URL) {
  client = new Redis(process.env.REDIS_URL, {
    maxRetriesPerRequest: 2,
    lazyConnect: true,
  });
  client.on("error", (err) => console.error("Redis Error:", err.message));
  client.connect().catch((err) => console.error("Redis Connect Failed:", err.message));
} else {
  console.warn("REDIS_URL not set — caching & rate limiting will run in no-op mode.");
}

export const getCache = async (key) => {
  if (!client || client.status !== "ready") return null;
  const value = await client.get(key);
  return value ? JSON.parse(value) : null;
};

export const setCache = async (key, value, ttlSeconds = 300) => {
  if (!client || client.status !== "ready") return;
  await client.set(key, JSON.stringify(value), "EX", ttlSeconds);
};

export const delCache = async (key) => {
  if (!client || client.status !== "ready") return;
  await client.del(key);
};

export default client;

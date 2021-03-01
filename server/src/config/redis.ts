export default {
  host: process.env.REDIS_HOST,
  post: Number(process.env.REDIS_PORT),
  password: process.env.REDIS_PASS,
  db: Number(process.env.REDIS_DB),
  ttl: null,
  defaultCacheTTL: 60 * 60 * 24,
};

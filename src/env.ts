import { z } from "zod";

const envSchema = z.object({
  API_PORT: z.coerce.number().default(3333),
  DATABASE_URL: z.string().url(),
  SECRET_JWT_KEY: z.string()
});

export const env = envSchema.parse(process.env);
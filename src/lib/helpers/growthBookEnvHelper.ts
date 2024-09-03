import { z } from "zod";

const env = {
  host: process.env.NEXT_PUBLIC_GROWTHBOOK_API_HOST,
  clientKey: process.env.NEXT_PUBLIC_GROWTHBOOK_PROD_CLIENT_KEY,
  devmode: process.env.NEXT_PUBLIC_GROWTHBOOK_ENABLE_DEVMODE,
};

const ConfigSchema = z.object({
  host: z.string().url(),
  clientKey: z.string(),
  devMode: z.coerce.boolean().default(false),
});

const parsedEnv = ConfigSchema.safeParse(env);

if (!parsedEnv.success) {
  console.error("Invalid environment variables:", parsedEnv.error.flatten().fieldErrors);

  throw new Error("Invalid environment variables");
}

const config = parsedEnv.data;

export { config };

import { createEnv } from "@t3-oss/env-core";
import { z } from "zod";

export const env = createEnv({
	clientPrefix: "VITE_",
	client: {
		VITE_CONVEX_URL: z.string().url().optional(),
	},
	server: {
		CONVEX_SITE_URL: z.string().url().optional(),
	},
	runtimeEnv: {
		VITE_CONVEX_URL: import.meta.env.VITE_CONVEX_URL,
		CONVEX_SITE_URL: process.env.CONVEX_SITE_URL,
	},
	emptyStringAsUndefined: true,
});

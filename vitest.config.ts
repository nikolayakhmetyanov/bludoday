import viteTsConfigPaths from "vite-tsconfig-paths";
import { defineConfig } from "vitest/config";

export default defineConfig({
	plugins: [viteTsConfigPaths()],
	test: {
		globals: true,
		environment: "jsdom",
		include: ["src/**/*.test.ts", "src/**/*.test.tsx"],
		exclude: ["node_modules", "dist", ".output", ".convex"],
		coverage: {
			provider: "v8",
			include: ["src/**/*.ts", "src/**/*.tsx"],
			exclude: ["**/*.types.ts", "**/*.d.ts", "**/index.ts"],
		},
		testTimeout: 10000,
	},
});

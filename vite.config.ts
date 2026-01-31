import tailwindcss from "@tailwindcss/vite";
import { devtools } from "@tanstack/devtools-vite";
import { nitroV2Plugin } from "@tanstack/nitro-v2-vite-plugin";
import { tanstackStart } from "@tanstack/react-start/plugin/vite";
import viteReact from "@vitejs/plugin-react";
import { defineConfig } from "vite";
import viteTsConfigPaths from "vite-tsconfig-paths";

export default defineConfig({
	plugins: [
		tanstackStart({
			srcDirectory: "src/app",
		}),
		nitroV2Plugin({
			preset: "node-server",
		}),
		devtools(),
		viteTsConfigPaths(),
		tailwindcss(),
		viteReact(),
	],
	server: {
		port: 3000,
		host: true,
	},
});

/// <reference types="vite/client" />

declare global {
	interface ImportMetaEnv {
		readonly VITE_CONVEX_URL?: string;
	}

	interface ImportMeta {
		readonly env: ImportMetaEnv;
	}

	namespace NodeJS {
		interface ProcessEnv {
			CONVEX_SITE_URL?: string;
		}
	}
}

export {};


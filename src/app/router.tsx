import { ConvexQueryClient } from "@convex-dev/react-query";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { createRouter as createTanStackRouter } from "@tanstack/react-router";
import { ConvexProvider, ConvexReactClient } from "convex/react";
import { env } from "../env";
import { routeTree } from "./routeTree.gen";

export function getRouter() {
	const convex = new ConvexReactClient(env.VITE_CONVEX_URL);
	const queryClient = new QueryClient();
	const convexQueryClient = new ConvexQueryClient(convex);

	queryClient.setDefaultOptions({
		queries: {
			queryKeyHashFn: convexQueryClient.hashFn(),
			queryFn: convexQueryClient.queryFn(),
		},
	});

	return createTanStackRouter({
		routeTree,
		context: {
			queryClient,
			convex,
		},
		defaultPreload: "intent",
		Wrap: ({ children }) => (
			<ConvexProvider client={convex}>
				<QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
			</ConvexProvider>
		),
	});
}

declare module "@tanstack/react-router" {
	interface Register {
		router: ReturnType<typeof getRouter>;
	}
}

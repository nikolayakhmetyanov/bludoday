import { ConvexQueryClient } from "@convex-dev/react-query";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { createRouter as createTanStackRouter } from "@tanstack/react-router";
import { ConvexProvider, ConvexReactClient } from "convex/react";
import { env } from "../env";
import { routeTree } from "./routeTree.gen";

export function getRouter() {
	const queryClient = new QueryClient();

	// Only create Convex client if URL is provided
	const convexUrl = env.VITE_CONVEX_URL;
	const convex = convexUrl ? new ConvexReactClient(convexUrl) : undefined;

	if (convex) {
		const convexQueryClient = new ConvexQueryClient(convex);
		queryClient.setDefaultOptions({
			queries: {
				queryKeyHashFn: convexQueryClient.hashFn(),
				queryFn: convexQueryClient.queryFn(),
			},
		});
	}

	return createTanStackRouter({
		routeTree,
		context: {
			queryClient,
			convex: convex as ConvexReactClient | undefined,
		},
		defaultPreload: "intent",
		Wrap: ({ children }) =>
			convex ? (
				<ConvexProvider client={convex}>
					<QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
				</ConvexProvider>
			) : (
				<QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
			),
	});
}

declare module "@tanstack/react-router" {
	interface Register {
		router: ReturnType<typeof getRouter>;
	}
}

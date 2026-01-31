import type { QueryClient } from "@tanstack/react-query";
import { createRootRouteWithContext, Outlet } from "@tanstack/react-router";
import type { ConvexReactClient } from "convex/react";
import "../styles.css";

interface RouterContext {
	queryClient: QueryClient;
	convex?: ConvexReactClient;
}

export const Route = createRootRouteWithContext<RouterContext>()({
	component: RootComponent,
});

function RootComponent() {
	return (
		<html lang="ru">
			<head>
				<meta charSet="UTF-8" />
				<meta name="viewport" content="width=device-width, initial-scale=1.0" />
				<title>Bludoday</title>
			</head>
			<body>
				<Outlet />
			</body>
		</html>
	);
}

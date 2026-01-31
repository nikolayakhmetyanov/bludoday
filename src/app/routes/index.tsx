import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/")({
	component: HomeComponent,
});

function HomeComponent() {
	return (
		<div className="flex min-h-screen items-center justify-center">
			<div className="text-center">
				<h1 className="text-4xl font-bold">Bludoday</h1>
				<p className="mt-4 text-muted-foreground">TanStack Start + Convex</p>
			</div>
		</div>
	);
}

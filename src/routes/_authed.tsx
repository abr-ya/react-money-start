import { createFileRoute, Outlet, redirect } from "@tanstack/react-router";

const RouteComponent = () => <Outlet />;

export const Route = createFileRoute("/_authed")({
  beforeLoad({ context }) {
    if (!context.userId) {
      redirect({
        to: "/",
        throw: true,
      });
    }
  },
  component: RouteComponent,
});

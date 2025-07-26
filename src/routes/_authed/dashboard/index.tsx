import { createFileRoute } from "@tanstack/react-router";

const RouteComponent = () => {
  return <div>Hello "/dashboard/"!</div>;
};

export const Route = createFileRoute("/_authed/dashboard/")({
  component: RouteComponent,
});

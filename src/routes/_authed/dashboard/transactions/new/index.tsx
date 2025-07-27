import { createFileRoute } from "@tanstack/react-router";

const RouteComponent = () => {
  return <div>Hello "/_authed/dashboard/transactions/new"!</div>;
};

export const Route = createFileRoute("/_authed/dashboard/transactions/new/")({ component: RouteComponent });

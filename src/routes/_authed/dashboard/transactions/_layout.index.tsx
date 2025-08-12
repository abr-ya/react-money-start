import { createFileRoute } from "@tanstack/react-router";
import { searchSchema } from "./search-schema";

const RouteComponent = () => {
  return <div>Hello "/_authed/dashboard/transactions/"!</div>;
};

export const Route = createFileRoute("/_authed/dashboard/transactions/_layout/")({
  component: RouteComponent,
  validateSearch: searchSchema,
});

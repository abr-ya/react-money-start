import { createFileRoute } from "@tanstack/react-router";
import { searchParamsSchema } from "../../../../schemas/search-params-schema";

const RouteComponent = () => {
  return <div>Hello "/_authed/dashboard/transactions/"!</div>;
};

export const Route = createFileRoute("/_authed/dashboard/transactions/_layout/")({
  component: RouteComponent,
  validateSearch: searchParamsSchema,
});

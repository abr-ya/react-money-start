import { createFileRoute } from "@tanstack/react-router";
import { searchParamsSchema } from "../../../../schemas/search-params-schema";
import TransactionsList from "./-transactions-list";

const RouteComponent = () => {
  const data = Route.useLoaderData();

  return <TransactionsList month={data.month} year={data.year} />;
};

export const Route = createFileRoute("/_authed/dashboard/transactions/_layout/")({
  component: RouteComponent,
  loaderDeps: ({ search }) => {
    const today = new Date();
    return {
      month: search.month ?? today.getMonth() + 1,
      year: search.year ?? today.getFullYear(),
    };
  },
  loader: async ({ deps }) => {
    return {
      month: deps.month,
      year: deps.year,
    };
  },
  validateSearch: searchParamsSchema,
});

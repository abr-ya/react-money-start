import { createFileRoute } from "@tanstack/react-router";
import { searchParamsSchema } from "../../../../schemas/search-params-schema";
import TransactionsList from "./-transactions-list";
import { getTransactionYearsRange } from "@/data/getTransactionYearsRange";
import { getTransactionsByMonth } from "@/data/getTransactionsByMonth";
import { normaliseTransactions } from "@/schemas/normalize";

const RouteComponent = () => {
  const data = Route.useLoaderData();

  return (
    <TransactionsList
      month={data.month}
      year={data.year}
      yearsRange={data.yearsRange}
      transactions={normaliseTransactions(data.transactions)}
    />
  );
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
    const yearsRange = await getTransactionYearsRange();
    const transactions = await getTransactionsByMonth({ data: { month: deps.month, year: deps.year } });

    return {
      transactions,
      month: deps.month,
      year: deps.year,
      yearsRange,
    };
  },
  validateSearch: searchParamsSchema,
});

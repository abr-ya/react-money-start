import { createFileRoute } from "@tanstack/react-router";
import { Cashflow } from "./-cashflow";
import { LastTransactions } from "./-last-transactions";
import { getLastTransactions } from "@/data/getLastTransactions";
import { normaliseTransactions } from "@/schemas/normalize";
import { getAnnualCashflow } from "@/data/getAnnualCashflow";
import { getTransactionYearsRange } from "@/data/getTransactionYearsRange";
import { searchYearSchema } from "@/schemas/search-params-schema";
import { LoadingSkeleton } from "@/components";

const RouteComponent = () => {
  const { cashflow, transactions, yearsRange, cfyear } = Route.useLoaderData();

  return (
    <>
      <Cashflow data={cashflow} yearsRange={yearsRange} year={cfyear.toString()} />
      <LastTransactions transactions={normaliseTransactions(transactions)} />
    </>
  );
};

export const Route = createFileRoute("/_authed/dashboard/_layout/")({
  component: RouteComponent,
  pendingComponent: () => <LoadingSkeleton />, // ==> Outlet!
  loaderDeps: ({ search }) => ({ year: search.year }),
  loader: async ({ deps }) => {
    const currentYear = deps.year ?? new Date().getFullYear();
    const [transactions, cashflow, yearsRange] = await Promise.all([
      getLastTransactions(),
      getAnnualCashflow({ data: { year: currentYear } }),
      getTransactionYearsRange(),
    ]);

    return { transactions, cashflow, yearsRange, cfyear: currentYear };
  },
  validateSearch: searchYearSchema,
});

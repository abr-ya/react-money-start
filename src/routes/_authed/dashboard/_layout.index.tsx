import { createFileRoute } from "@tanstack/react-router";
import { Cashflow } from "./-cashflow";
import { LastTransactions } from "./-last-transactions";
import { getLastTransactions } from "@/data/getLastTransactions";
import { normaliseTransactions } from "@/schemas/normalize";
import { getAnnualCashflow } from "@/data/getAnnualCashflow";

const RouteComponent = () => {
  const { cashflow, transactions } = Route.useLoaderData();

  return (
    <>
      <Cashflow data={cashflow} />
      <LastTransactions transactions={normaliseTransactions(transactions)} />
    </>
  );
};

export const Route = createFileRoute("/_authed/dashboard/_layout/")({
  component: RouteComponent,
  loader: async () => {
    const [transactions, cashflow] = await Promise.all([
      getLastTransactions(),
      getAnnualCashflow({ data: { year: new Date().getFullYear() } }),
    ]);

    return { transactions, cashflow };
  },
});

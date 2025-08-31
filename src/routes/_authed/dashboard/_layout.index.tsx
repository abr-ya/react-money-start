import { createFileRoute } from "@tanstack/react-router";
import { Cashflow } from "./-cashflow";
import { LastTransactions } from "./-last-transactions";
import { getLastTransactions } from "@/data/getLastTransactions";
import { normaliseTransactions } from "@/schemas/normalize";

const RouteComponent = () => {
  const { transactions } = Route.useLoaderData();

  return (
    <>
      <h1 className="text-2xl font-semibold pb-4">Dashboard</h1>
      <Cashflow />
      <LastTransactions transactions={normaliseTransactions(transactions)} />
    </>
  );
};

export const Route = createFileRoute("/_authed/dashboard/_layout/")({
  component: RouteComponent,
  loader: async () => {
    const [transactions] = await Promise.all([getLastTransactions()]);

    return { transactions };
  },
});

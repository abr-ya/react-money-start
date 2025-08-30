import { createFileRoute } from "@tanstack/react-router";
import { Cashflow } from "./-cashflow";
import { LastTransactions } from "./-last-transactions";
import { getLastTransactions } from "@/data/getLastTransactions";

const RouteComponent = () => {
  const { transactions } = Route.useLoaderData();
  console.log("Dashboard, lastTransactions: ", transactions);

  return (
    <>
      <h1 className="text-2xl font-semibold pb-4">Dashboard</h1>
      <Cashflow />
      <LastTransactions />
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

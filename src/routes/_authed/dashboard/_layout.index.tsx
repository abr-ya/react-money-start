import { createFileRoute } from "@tanstack/react-router";
import { Cashflow } from "./-cashflow";
import { LastTransactions } from "./-last-transactions";

const RouteComponent = () => {
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
});

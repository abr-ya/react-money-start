import { Breadcrumbs } from "@/components";
import { createFileRoute, Outlet } from "@tanstack/react-router";

const RouteComponent = () => (
  <div className="max-w-[960px] mx-auto py-10">
    <Breadcrumbs
      data={[
        { to: "/dashboard", title: "Dashboard" },
        { to: "/dashboard/transactions", title: "Transactions" },
        { to: null, title: "Edit Transaction" },
      ]}
    />
    <Outlet />
  </div>
);

export const Route = createFileRoute("/_authed/dashboard/transactions/$id/_layout")({
  component: RouteComponent,
});

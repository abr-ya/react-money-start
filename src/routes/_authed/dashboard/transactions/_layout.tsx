import { Breadcrumbs } from "@/components";
import { createFileRoute, Outlet } from "@tanstack/react-router";

const RouteComponent = () => (
  <div className="max-w-screen-xl mx-auto py-10">
    <Breadcrumbs
      data={[
        { to: "/dashboard", title: "Dashboard" },
        { to: null, title: "Transactions" },
      ]}
    />
    <Outlet />
  </div>
);

export const Route = createFileRoute("/_authed/dashboard/transactions/_layout")({
  component: RouteComponent,
});

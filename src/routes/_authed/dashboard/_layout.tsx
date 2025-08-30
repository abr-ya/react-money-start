import { createFileRoute, Outlet } from "@tanstack/react-router";

import { Breadcrumbs } from "@/components";

const RouteComponent = () => (
  <div className="max-w-[960px] mx-auto py-10">
    <Breadcrumbs data={[{ to: null, title: "Dashboard" }]} />
    <Outlet />
  </div>
);

export const Route = createFileRoute("/_authed/dashboard/_layout")({
  component: RouteComponent,
});

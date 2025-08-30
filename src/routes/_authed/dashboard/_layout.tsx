import { Breadcrumbs } from "@/components";
import { createFileRoute, Outlet } from "@tanstack/react-router";

const RouteComponent = () => (
  <div className="max-w-[960px] mx-auto py-10">
    <Breadcrumbs data={[{ to: null, title: "Dashboard" }]} />
    <Outlet />
  </div>
);

export const Route = createFileRoute("/_authed/dashboard/_layout")({
  component: RouteComponent,
});

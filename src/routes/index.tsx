import { createFileRoute } from "@tanstack/react-router";

import { ButtonLink, PageWithTable } from "@/components";

const Home = () => (
  <div className="max-w-[960px] mx-auto py-10">
    <PageWithTable
      title="Home Page"
      headerRight={
        <div className="flex gap-4">
          <ButtonLink to="/dashboard/transactions" text="View All Transactions" variant="outline" />
          <ButtonLink to="/dashboard/transactions/new" text="New Transaction" />
        </div>
      }
    >
      <h1>Hello, TanStack Start!</h1>
      <p>About project...</p>
    </PageWithTable>
  </div>
);

export const Route = createFileRoute("/")({
  component: Home,
});

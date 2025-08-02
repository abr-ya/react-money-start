import { TransactionFormProvider } from "@/components";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { getCategories } from "@/data/getCategories";
import { createFileRoute } from "@tanstack/react-router";

const RouteComponent = () => {
  const { categories } = Route.useLoaderData();

  return (
    <Card className="max-w-screen-md mt-4">
      <CardHeader>
        <CardTitle>New Transaction</CardTitle>
      </CardHeader>
      <CardContent>
        <TransactionFormProvider categories={categories} />
      </CardContent>
    </Card>
  );
};

export const Route = createFileRoute("/_authed/dashboard/transactions/new/_layout/")({
  component: RouteComponent,
  loader: async () => {
    const categories = await getCategories();
    return {
      categories,
    };
  },
});

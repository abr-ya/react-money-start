import { TransactionFormProvider } from "@/components";
import { TransactionSchemaType } from "@/components/forms/transaction-form-schema";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { createTransaction } from "@/data/createTransaction";
import { getCategories } from "@/data/getCategories";
import { createFileRoute } from "@tanstack/react-router";

const RouteComponent = () => {
  const { categories } = Route.useLoaderData();

  const createHandler = async (data: TransactionSchemaType) => {
    console.log("HANDLE SUBMIT: ", data);
    const transaction = await createTransaction({ data });
    console.log({ transaction });
    // toast
    // navigate
  };

  return (
    <Card className="max-w-screen-md mt-4">
      <CardHeader>
        <CardTitle>New Transaction</CardTitle>
      </CardHeader>
      <CardContent>
        <TransactionFormProvider categories={categories} onSubmit={createHandler} />
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

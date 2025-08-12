import { createFileRoute, useNavigate } from "@tanstack/react-router";
import { toast } from "sonner";

import { TransactionFormProvider } from "@/components";
import { TransactionSchemaType } from "@/components/forms/transaction-form-schema";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { createTransaction } from "@/data/createTransaction";
import { getCategories } from "@/data/getCategories";

const RouteComponent = () => {
  const { categories } = Route.useLoaderData();
  const navigate = useNavigate();

  const createHandler = async (data: TransactionSchemaType) => {
    console.log("HANDLE SUBMIT: ", data);
    const transaction = await createTransaction({ data });
    console.log(transaction);
    toast(`Transaction ${transaction[0].id} has been created by ${transaction[0].userId}.`);
    navigate({ to: "/dashboard/transactions" });
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

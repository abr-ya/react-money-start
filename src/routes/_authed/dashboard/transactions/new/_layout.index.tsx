import { createFileRoute, useNavigate } from "@tanstack/react-router";
import { toast } from "sonner";

import { PageBody, TransactionFormProvider } from "@/components";
import { TransactionSchemaType } from "@/schemas/transaction-form-schema";
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
    navigate({
      to: "/dashboard/transactions",
      search: {
        month: data.transactionDate.getMonth() + 1,
        year: data.transactionDate.getFullYear(),
      },
    });
  };

  return (
    <PageBody title="New Transaction">
      <TransactionFormProvider categories={categories} onSubmit={createHandler} />
    </PageBody>
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

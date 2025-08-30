import { PageBody, TransactionFormProvider } from "@/components";
import { getCategories } from "@/data/getCategories";
import { getTransactionById } from "@/data/getTransactionById";
import { TransactionSchemaType } from "@/schemas/transaction-form-schema";
import { createFileRoute } from "@tanstack/react-router";

const TransactionDetail = () => {
  const { categories, transaction } = Route.useLoaderData();

  console.log("transaction detail: ", transaction);

  const updateHandler = async (data: TransactionSchemaType) => {
    console.log("HANDLE SUBMIT (EDIT): ", data);
  };

  return (
    <PageBody title="Edit Transaction">
      <TransactionFormProvider categories={categories} onSubmit={updateHandler} />
    </PageBody>
  );
};

export const Route = createFileRoute("/_authed/dashboard/transactions/$id/_layout/")({
  component: TransactionDetail,
  loader: async ({ params }) => {
    const [categories, transaction] = await Promise.all([
      getCategories(),
      getTransactionById({ data: { id: Number(params.id) } }),
    ]);

    return {
      categories,
      transaction,
    };
  },
});

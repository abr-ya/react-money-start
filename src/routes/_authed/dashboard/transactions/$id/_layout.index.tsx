import { createFileRoute, useNavigate } from "@tanstack/react-router";
import { toast } from "sonner";

import { PageBody, TransactionFormProvider } from "@/components";
import { getCategories } from "@/data/getCategories";
import { getTransactionById } from "@/data/getTransactionById";
import { updateTransaction } from "@/data/updateTransaction";
import { TransactionSchemaType } from "@/schemas/transaction-form-schema";

const TransactionDetail = () => {
  const navigate = useNavigate();
  const { categories, transaction } = Route.useLoaderData();
  const transactionType = categories.find((category) => category.id === transaction.categoryId)?.type ?? "income";

  const updateHandler = async (data: TransactionSchemaType) => {
    console.log("HANDLE SUBMIT (EDIT): ", data);
    const updated = await updateTransaction({ data: { id: transaction.id, ...data } });
    toast(`Transaction ${updated[0].id} has been updated by ${updated[0].userId}.`);
    navigate({
      to: "/dashboard/transactions",
      search: {
        month: data.transactionDate.getMonth() + 1,
        year: data.transactionDate.getFullYear(),
      },
    });
  };

  return (
    <PageBody title="Edit Transaction">
      <TransactionFormProvider
        categories={categories}
        onSubmit={updateHandler}
        init={{
          amount: Number(transaction.amount),
          categoryId: transaction.categoryId.toString(), // Fix for RHFSelect which expects a string value
          description: transaction.description,
          transactionDate: new Date(transaction.transactionDate),
          transactionType,
        }}
      />
    </PageBody>
  );
};

const ErrorDetail = ({ errorMessage }: { errorMessage: string }) => (
  <>
    <div className="text-3xl text-muted-foreground">Oops! Transaction not found.</div>
    <p>Detail: {errorMessage}</p>
  </>
);

export const Route = createFileRoute("/_authed/dashboard/transactions/$id/_layout/")({
  component: TransactionDetail,
  errorComponent: ({ error }) => <ErrorDetail errorMessage={error.message} />,
  loader: async ({ params }) => {
    const [categories, transaction] = await Promise.all([
      getCategories(),
      getTransactionById({ data: { id: Number(params.id) } }),
    ]);

    if (!transaction) throw new Error("Transaction not found");

    return {
      categories,
      transaction,
    };
  },
});

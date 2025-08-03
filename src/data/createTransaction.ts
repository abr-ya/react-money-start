import { transactionFormSchema, TransactionSchemaType } from "@/components/forms/transaction-form-schema";
import { neon } from "@/db";
import { transactionsTable } from "@/db/schema";
import { createServerFn } from "@tanstack/react-start";
import { format } from "date-fns";

export const createTransaction = createServerFn({
  method: "POST",
})
  .validator((data: TransactionSchemaType) => transactionFormSchema.parse(data))
  .handler(async ({ data, context }) => {
    const userId = context?.userId || "1234";
    console.log(userId);
    const transaction = await neon
      .insert(transactionsTable)
      .values({
        userId,
        amount: data.amount.toString(),
        description: data.description,
        categoryId: data.categoryId,
        transactionDate: format(data.transactionDate, "yyyy-MM-dd"),
      })
      .returning();

    return transaction;
  });

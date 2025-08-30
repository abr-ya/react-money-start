import { updateTransactionSchema, UpdateTransactionSchemaType } from "@/schemas/transaction-form-schema";
import { neon } from "@/db";
import { transactionsTable } from "@/db/schema";
import { createServerFn } from "@tanstack/react-start";
import { format } from "date-fns";
import { authMiddleware } from "./authMiddleware";
import { and, eq } from "drizzle-orm";

export const updateTransaction = createServerFn({
  method: "POST",
})
  .middleware([authMiddleware])
  .validator((data: UpdateTransactionSchemaType) => updateTransactionSchema.parse(data))
  .handler(async ({ context, data }) => {
    const transaction = await neon
      .update(transactionsTable)
      .set({
        amount: data.amount.toString(),
        categoryId: data.categoryId,
        transactionDate: format(data.transactionDate, "yyyy-MM-dd"),
        description: data.description,
      })
      .where(and(eq(transactionsTable.id, data.id), eq(transactionsTable.userId, context.userId)))
      .returning();

    return transaction;
  });

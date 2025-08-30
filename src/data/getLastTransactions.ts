import { createServerFn } from "@tanstack/react-start";

import { neon } from "@/db";
import { categoriesTable, transactionsTable } from "@/db/schema";
import { desc, eq } from "drizzle-orm";
import { authMiddleware } from "./authMiddleware";

export const getLastTransactions = createServerFn({
  method: "GET",
})
  .middleware([authMiddleware])
  .handler(async ({ context }) => {
    const transactions = await neon
      .select({
        id: transactionsTable.id,
        description: transactionsTable.description,
        amount: transactionsTable.amount,
        transactionDate: transactionsTable.transactionDate,
        category: categoriesTable.name,
        transactionType: categoriesTable.type,
      })
      .from(transactionsTable)
      .where(eq(transactionsTable.userId, context.userId))
      .orderBy(desc(transactionsTable.transactionDate))
      .leftJoin(categoriesTable, eq(transactionsTable.categoryId, categoriesTable.id))
      .limit(5);

    return transactions;
  });

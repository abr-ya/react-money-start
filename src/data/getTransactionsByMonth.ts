import { createServerFn } from "@tanstack/react-start";
import { format } from "date-fns";
import { and, desc, eq, gte, lte } from "drizzle-orm";
import { z } from "zod";

import { neon } from "@/db";
import { categoriesTable, transactionsTable } from "@/db/schema";
import { authMiddleware } from "./authMiddleware";
import { getTransactionsSchema } from "@/schemas/search-params-schema";

export const getTransactionsByMonth = createServerFn({
  method: "GET",
})
  .middleware([authMiddleware])
  .validator((data: z.infer<typeof getTransactionsSchema>) => getTransactionsSchema.parse(data))
  .handler(async ({ context, data }) => {
    const dateFrom = new Date(data.year, data.month - 1, 1);
    const dateTo = new Date(data.year, data.month, 0); // last day of month

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
      .where(
        and(
          eq(transactionsTable.userId, context.userId),
          gte(transactionsTable.transactionDate, format(dateFrom, "yyyy-MM-dd")),
          lte(transactionsTable.transactionDate, format(dateTo, "yyyy-MM-dd")),
        ),
      )
      .orderBy(desc(transactionsTable.transactionDate))
      .leftJoin(categoriesTable, eq(transactionsTable.categoryId, categoriesTable.id));

    return transactions;
  });

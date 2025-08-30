import { createServerFn } from "@tanstack/react-start";
import { and, eq } from "drizzle-orm";
import { z } from "zod";

import { neon } from "@/db";
import { authMiddleware } from "./authMiddleware";
import { transactionsTable } from "@/db/schema";

const schema = z.object({
  id: z.number(),
});

export const getTransactionById = createServerFn({
  method: "GET",
})
  .middleware([authMiddleware])
  .validator((data: z.infer<typeof schema>) => schema.parse(data))
  .handler(async ({ data, context }) => {
    const [transaction] = await neon
      .select()
      .from(transactionsTable)
      .where(and(eq(transactionsTable.id, data.id), eq(transactionsTable.userId, context.userId)));

    return transaction;
  });

import { z } from "zod";

const today = new Date();

export const searchYearSchema = z.object({
  year: z
    .number()
    .min(today.getFullYear() - 100)
    .max(today.getFullYear())
    .catch(today.getFullYear())
    .optional(),
});

export const searchParamsSchema = searchYearSchema.extend({
  month: z
    .number()
    .min(1)
    .max(12)
    .catch(today.getMonth() + 1)
    .optional(),
});

export const getTransactionsSchema = z.object({
  month: z.number().min(1).max(12),
  year: z
    .number()
    .min(today.getFullYear() - 100)
    .max(today.getFullYear()),
});

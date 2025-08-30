import { createServerFn } from "@tanstack/react-start";

import { neon } from "@/db";
import { categoriesTable } from "@/db/schema";

export const getCategories = createServerFn({
  method: "GET",
}).handler(async () => {
  const categories = await neon.select().from(categoriesTable);

  return categories;
});

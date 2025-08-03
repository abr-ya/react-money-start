import { getAuth } from "@clerk/tanstack-react-start/server";
import { createMiddleware } from "@tanstack/react-start";
import { getWebRequest } from "@tanstack/react-start/server";

export const authMiddleware = createMiddleware({ type: "function" }).server(async ({ next }) => {
  const user = await getAuth(getWebRequest());
  const userId = user?.userId;

  if (!userId) throw new Error("Unauthorized");

  const result = await next({
    context: { userId },
  });

  return result;
});

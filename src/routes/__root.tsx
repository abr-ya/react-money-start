/// <reference types="vite/client" />
import { Outlet, createRootRoute } from "@tanstack/react-router";
import { ClerkProvider } from "@clerk/tanstack-react-start";

import appCss from "@/styles/app.css?url";
// Supports weights 100-900
import roboto from "@fontsource-variable/roboto?url";
import { NotFound, RootLayout } from "@/components";
import { getSignedInUserId } from "@/data/getSignedInUserId";

const RootComponent = () => (
  <ClerkProvider>
    <RootLayout>
      <Outlet />
    </RootLayout>
  </ClerkProvider>
);

export const Route = createRootRoute({
  beforeLoad: async () => {
    const userId = await getSignedInUserId();

    return { userId };
  },
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "Money App | TanStack Start" },
    ],
    links: [
      { rel: "stylesheet", href: appCss },
      { rel: "stylesheet", href: roboto },
    ],
  }),
  component: RootComponent,
  notFoundComponent: NotFound,
});

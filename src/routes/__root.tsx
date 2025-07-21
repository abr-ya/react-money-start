/// <reference types="vite/client" />
import type { ReactNode } from "react";
import { Outlet, createRootRoute, HeadContent, Scripts } from "@tanstack/react-router";
import { ClerkProvider, SignedOut, SignInButton } from "@clerk/tanstack-react-start";
import { TanStackRouterDevtools } from "@tanstack/react-router-devtools";

import appCss from "@/styles/app.css?url";
// Supports weights 100-900
import roboto from "@fontsource-variable/roboto?url";
import { Button, DefaultCatchBoundary, Navbar, NotFound } from "@/components/index";
import { getAuth } from "@clerk/tanstack-react-start/server";
import { getWebRequest } from "@tanstack/react-start/server";
import { createServerFn } from "@tanstack/react-start";

const fetchClerkAuth = createServerFn({ method: "GET" }).handler(async () => {
  const { userId } = await getAuth(getWebRequest()!);

  return { userId };
});

function RootComponent() {
  return (
    <ClerkProvider>
      <RootDocument>
        <Outlet />
      </RootDocument>
    </ClerkProvider>
  );
}

export const Route = createRootRoute({
  head: () => ({
    beforeLoad: async () => {
      const { userId } = await fetchClerkAuth();

      return { userId };
    },
    meta: [
      { charSet: "utf-8" },
      {
        name: "viewport",
        content: "width=device-width, initial-scale=1",
      },
      { title: "Money App | TanStack Start" },
    ],
    links: [
      { rel: "stylesheet", href: appCss },
      { rel: "stylesheet", href: roboto },
    ],
  }),
  errorComponent: (props) => {
    return (
      <RootDocument>
        <DefaultCatchBoundary {...props} />
      </RootDocument>
    );
  },
  notFoundComponent: () => <NotFound />,
  component: RootComponent,
});

const RootDocument = ({ children }: { children: ReactNode }) => (
  <html>
    <head>
      <HeadContent />
    </head>
    <body>
      <Navbar />
      <div className="ml-auto">
        <SignedOut>
          <Button asChild>
            <SignInButton />
          </Button>
        </SignedOut>
      </div>
      {children}
      <TanStackRouterDevtools position="bottom-right" />
      <Scripts />
    </body>
  </html>
);

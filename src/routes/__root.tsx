/// <reference types="vite/client" />
import type { ReactNode } from "react";
import { Outlet, createRootRoute, HeadContent, Scripts } from "@tanstack/react-router";
import { ClerkProvider } from "@clerk/tanstack-react-start";

import appCss from "@/styles/app.css?url";
// Supports weights 100-900
import roboto from "@fontsource-variable/roboto?url";
import { Navbar } from "@/components";

const RootComponent = () => (
  <ClerkProvider>
    <RootDocument>
      <Outlet />
    </RootDocument>
  </ClerkProvider>
);

export const Route = createRootRoute({
  head: () => ({
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
  component: RootComponent,
});

const RootDocument = ({ children }: Readonly<{ children: ReactNode }>) => (
  <html>
    <head>
      <HeadContent />
    </head>
    <body>
      <Navbar />
      {children}
      <Scripts />
    </body>
  </html>
);

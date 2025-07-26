import { HeadContent, Scripts } from "@tanstack/react-router";
import { ReactNode } from "react";
import { Navbar } from "./navbar/navbar";

export const RootLayout = ({ children }: Readonly<{ children: ReactNode }>) => (
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

import { HeadContent, Scripts } from "@tanstack/react-router";
import { ReactNode } from "react";
import { Toaster } from "@/components/ui/sonner";
import { Navbar } from "./navbar/navbar";

export const RootLayout = ({ children }: Readonly<{ children: ReactNode }>) => (
  <html>
    <head>
      <HeadContent />
    </head>
    <body>
      <Navbar />
      {children}
      <Toaster />
      <Scripts />
    </body>
  </html>
);

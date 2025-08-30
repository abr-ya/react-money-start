import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { PropsWithChildren } from "react";

interface IPageBody {
  title: string;
}

export const PageBody = ({ title, children }: PropsWithChildren<IPageBody>) => (
  <Card className="max-w-screen-md mt-4">
    <CardHeader>
      <CardTitle>{title}</CardTitle>
    </CardHeader>
    <CardContent>{children}</CardContent>
  </Card>
);

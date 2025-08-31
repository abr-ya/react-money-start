import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { PropsWithChildren, ReactNode } from "react";

interface IPageBody {
  title: string;
}

interface IPageWithTable extends IPageBody {
  headerRight?: ReactNode;
}

export const PageBody = ({ title, children }: PropsWithChildren<IPageBody>) => (
  <Card className="max-w-screen-md mt-4">
    <CardHeader>
      <CardTitle>{title}</CardTitle>
    </CardHeader>
    <CardContent>{children}</CardContent>
  </Card>
);

export const PageWithTable = ({ title, children, headerRight }: PropsWithChildren<IPageWithTable>) => (
  <Card className="mt-4">
    <CardHeader>
      <CardTitle className="flex justify-between items-baseline">
        <div>{title}</div>
        {headerRight ? headerRight : null}
      </CardTitle>
    </CardHeader>
    <CardContent>{children}</CardContent>
  </Card>
);

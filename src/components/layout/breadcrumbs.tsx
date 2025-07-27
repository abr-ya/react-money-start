import { Link } from "@tanstack/react-router";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "../ui/breadcrumb";
import { Fragment } from "react/jsx-runtime";

export interface ICrumb {
  title: string;
  to: string | null;
}

interface IBreadcrumbs {
  data: ICrumb[];
}

export const Breadcrumbs = ({ data }: IBreadcrumbs) => (
  <Breadcrumb>
    <BreadcrumbList>
      {data.map((el) => (
        <Fragment key={el.title}>
          <BreadcrumbItem>
            {el.to ? (
              <BreadcrumbLink asChild>
                <Link to={el.to}>{el.title}</Link>
              </BreadcrumbLink>
            ) : (
              <BreadcrumbPage>{el.title}</BreadcrumbPage>
            )}
          </BreadcrumbItem>
          {el.to ? <BreadcrumbSeparator /> : null}
        </Fragment>
      ))}
    </BreadcrumbList>
  </Breadcrumb>
);

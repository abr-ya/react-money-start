import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { DevTool } from "@hookform/devtools";

import {
  TransactionSchemaType,
  transactionDefaultValues as defaultValues,
  transactionFormSchema,
} from "../../schemas/transaction-form-schema";
import { TransactionForm } from "./transaction-form";
import { TEST_MODE } from "./transaction-form-contants";
import { Form } from "../ui/form";

export const TransactionFormProvider = (props) => {
  const formMethods = useForm<TransactionSchemaType>({
    defaultValues,
    mode: "all",
    // @ts-expect-error todo: fix it!!!
    resolver: zodResolver(transactionFormSchema),
  });

  return (
    <Form {...formMethods}>
      <TransactionForm {...props} />
      {/* @ts-expect-error todo: fix it!!! */}
      {TEST_MODE ? <DevTool control={formMethods.control} /> : null}
    </Form>
  );
};

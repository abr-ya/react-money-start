import { SubmitErrorHandler, SubmitHandler, useFormContext } from "react-hook-form";
import { TransactionSchemaType } from "./transaction-form-schema";
import { LABELS, TEST_MODE } from "./transaction-form-contants";
import { RHFInput } from "./fields";
import { Button } from "..";

export const TransactionForm = () => {
  const { formState, handleSubmit, reset } = useFormContext<TransactionSchemaType>();

  const submitHandler: SubmitHandler<TransactionSchemaType> = (data) => {
    const preparedData = data;
    if (TEST_MODE) {
      console.log("preparedData", preparedData);
      reset();
    } else {
      console.log("preparedData", preparedData); // todo: send form!
    }
  };

  const errorHandler: SubmitErrorHandler<TransactionSchemaType> = (errors) => {
    if (TEST_MODE) console.log("errors", errors);
  };

  return (
    <form onSubmit={handleSubmit(submitHandler, errorHandler)}>
      <RHFInput<TransactionSchemaType> label={LABELS.amount} name="amount" type="number" />
      <Button type="submit">{formState.isSubmitting ? "Submitting..." : "Submit"}</Button>
    </form>
  );
};

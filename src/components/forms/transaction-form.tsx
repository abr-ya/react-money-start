import { SubmitErrorHandler, SubmitHandler, useFormContext } from "react-hook-form";
import { TransactionSchemaType } from "./transaction-form-schema";
import { LABELS, TEST_MODE } from "./transaction-form-contants";
import { RHFInput, RHFSelect } from "./fields";
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

  const types = ["income", "expense"];

  return (
    <form onSubmit={handleSubmit(submitHandler, errorHandler)}>
      <fieldset disabled={formState.isSubmitting} className="grid grid-cols-2 gap-y-5 gap-x-2">
        <RHFSelect<TransactionSchemaType> label={LABELS.type} name="transactionType" options={types} />
        <RHFInput<TransactionSchemaType> label={LABELS.amount} name="amount" type="number" />
      </fieldset>
      <fieldset disabled={formState.isSubmitting} className="grid grid-cols-2 gap-y-5 gap-x-2">
        <RHFInput<TransactionSchemaType> label={LABELS.description} name="description" />
        <Button type="submit">{formState.isSubmitting ? "Submitting..." : "Submit"}</Button>
      </fieldset>
    </form>
  );
};

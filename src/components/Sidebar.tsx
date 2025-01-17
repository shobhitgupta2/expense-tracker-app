import AddExpense from "./AddExpense.tsx";
import TransactionForm from "./TransactionForm.tsx";
import { FormProvider, SubmitHandler, useForm } from "react-hook-form";

interface FormFields {
  name: string;
  type: string;
  amount: number;
  desc: string;
}

interface SidebarProps {
  onSubmit: (data: FormFields & { id: number }) => void;
}

const Sidebar = ({ onSubmit }: SidebarProps) => {
  const methods = useForm<FormFields>();
  const { handleSubmit, reset } = methods;
  const handleFormSubmit: SubmitHandler<FormFields> = (data) => {
    const transactionWithID = { id: Date.now(), ...data };
    onSubmit(transactionWithID);
    reset();
  };

  return (
    <div className="flex h-full w-1/4">
      <div className="h-full w-3/4 bg-[#eceaea] -mr-2 z-1">
        <div className="text-3xl font-bold text-[black] m-3">
          Add Transaction
        </div>
        <FormProvider {...methods}>
          <form id="transaction-form" onSubmit={handleSubmit(handleFormSubmit)}>
            <TransactionForm />
          </form>
        </FormProvider>
      </div>
      <AddExpense />
    </div>
  );
};

export default Sidebar;

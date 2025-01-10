import "./Sidebar.css";
import AddExpense from "../AddExpense/AddExpense.tsx";
import TransactionForm from "../TransactionForm/TransactionForm.tsx";
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
    <div className="sidebar-container">
      <div className="sidebar">
        <div className="sidebar-title">Add Transaction</div>
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

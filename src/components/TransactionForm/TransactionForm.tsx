import { useFormContext } from "react-hook-form";
import "./TransactionForm.css";

const Form = () => {
  const { register, formState } = useFormContext();
  const { errors } = formState;

  return (
    <>
      <p className="field">
        Transaction Name <i style={{ color: "red" }}>*</i>
      </p>
      <input
        {...register("name", {
          required: "Transaction Name is Required",
          maxLength: { value: 25, message: "Name must be under 25 characters" },
        })}
        type="text"
        className="input"
        id="name"
        autoCapitalize="sentences"
      />

      <div className="error-message">
        {errors.name ? (errors.name.message as string) : " "}
      </div>

      <p className="field">
        Transaction Type <i style={{ color: "red" }}>*</i>
      </p>
      <select
        {...register("type", {
          required: "Please select a Transaction Type",
        })}
        className="select"
        id="typeDropDown"
        style={{ fontFamily: "Verdana", fontSize: "15px" }}
      >
        <option></option>
        <option>Earning</option>
        <option>Expense</option>
      </select>

      <div className="error-message">
        {errors.type ? (errors.type.message as string) : " "}
      </div>

      <p className="field">
        Transaction Amount <i style={{ color: "red" }}>*</i>
      </p>
      <input
        {...register("amount", {
          required: "Please enter an Amount",
          min: { value: 0, message: "Please enter a Valid Amount" },
          valueAsNumber: true,
        })}
        type="number"
        className="input"
        onKeyDown={(e) => {
          if (e.key === "e" || e.key === "+" || e.key === "-") {
            e.preventDefault();
          }
        }}
      />
      <div className="error-message">
        {errors.amount ? (errors.amount.message as string) : " "}
      </div>

      <p className="field">
        Transaction Description <i style={{ color: "red" }}>*</i>
      </p>
      <input
        {...register("desc", { required: "Please enter a description" })}
        type="text"
        className="input"
      />
      <div className="error-message">
        {errors.desc ? (errors.desc.message as string) : " "}
      </div>
    </>
  );
};

export default Form;

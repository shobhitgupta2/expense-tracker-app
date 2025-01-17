import { useFormContext } from "react-hook-form";

const Form = () => {
  const { register, formState } = useFormContext();
  const { errors } = formState;

  return (
    <>
      <p className="text-[grey] text-base ml-3 mt-10 mb-1">
        Transaction Name <i style={{ color: "red" }}>*</i>
      </p>
      <input
        {...register("name", {
          required: "Please enter a Transaction Name",
          maxLength: { value: 25, message: "Name must be under 25 characters" },
        })}
        type="text"
        className="ml-3 h-12 w-4/5 rounded-xl p-3 sticky border-2 border-[white]
        hover:border-[#4c03d8] active:border-[#4c03d8] shadow-md outline-none"
        id="name"
        autoCapitalize="sentences"
      />

      <div className="text-[red] text-base ml-3 mt-0.5 absolute">
        {errors.name ? (errors.name.message as string) : " "}
      </div>

      <p className="text-[grey] text-base ml-3 mt-20 mb-1">
        Transaction Type <i style={{ color: "red" }}>*</i>
      </p>
      <select
        {...register("type", {
          required: "Please select a Transaction Type",
        })}
        className="ml-3 h-12 w-4/5 rounded-xl p-3 sticky border-2 border-[white]
        hover:border-[#4c03d8] active:border-[#4c03d8] appearance-none shadow-md outline-none"
        id="typeDropDown"
        style={{ fontFamily: "Verdana", fontSize: "15px" }}
      >
        <option></option>
        <option>Earning</option>
        <option>Expense</option>
      </select>

      <div className="text-[red] text-base ml-3 mt-0.5 absolute">
        {errors.type ? (errors.type.message as string) : " "}
      </div>

      <p className="text-[grey] text-base ml-3 mt-20 mb-1">
        Transaction Amount <i style={{ color: "red" }}>*</i>
      </p>
      <input
        {...register("amount", {
          required: "Please enter an Amount",
          min: { value: 0, message: "Please enter a Valid Amount" },
          valueAsNumber: true,
        })}
        type="number"
        className="hover:appearance-none ml-3 h-12 w-4/5 rounded-xl p-3 sticky
        border-2 border-[white] hover:border-[#4c03d8] active:border-[#4c03d8] shadow-md outline-none
        [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none
        [&::-webkit-inner-spin-button]:appearance-none"
        onKeyDown={(e) => {
          if (e.key === "e" || e.key === "+" || e.key === "-") {
            e.preventDefault();
          }
        }}
      />
      <div className="text-[red] text-base ml-3 mt-0.5 absolute">
        {errors.amount ? (errors.amount.message as string) : " "}
      </div>

      <p className="text-[grey] text-base ml-3 mt-20 mb-1">
        Transaction Description <i style={{ color: "red" }}>*</i>
      </p>
      <input
        {...register("desc", { required: "Please enter a description" })}
        type="text"
        className="ml-3 h-12 w-4/5 rounded-xl p-3 sticky border-2 border-[white]
        hover:border-[#4c03d8] active:border-[#4c03d8] shadow-md outline-none"
      />
      <div className="text-[red] text-base ml-3 mt-0.5 absolute">
        {errors.desc ? (errors.desc.message as string) : " "}
      </div>
    </>
  );
};

export default Form;

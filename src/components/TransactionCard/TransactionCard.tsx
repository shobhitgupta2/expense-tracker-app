type TransactionData = {
  id: number;
  name: string;
  type: string;
  amount: number;
  desc: string;
};

interface TransactionDataProps {
  transaction: TransactionData;
  onDelete: (id: number) => void;
}

const TransactionCard = ({ transaction, onDelete }: TransactionDataProps) => {
  const formattedDate = new Date(transaction.id).toLocaleDateString("en-US", {
    year: "numeric",
    month: "short",
    day: "numeric",
    hour: "2-digit",
    minute: "2-digit",
  });
  return (
    <div className="bg-[#eceaea] border-4 border-[#bb86fc] rounded-3xl h-max w-10/12 m-6 p-5">
      <div className="flex flex-row justify-between mb-5">
        <p
          style={{
            color:
              transaction.type === "Earning" ? "mediumseagreen" : "indianred",
            fontWeight: "bold",
            fontFamily: "Courier",
            fontSize: "17px",
          }}
        >
          {transaction.type === "Earning" ? "+" : "-"}${transaction.amount}
        </p>
        <button
          type="button"
          onClick={() => onDelete(transaction.id)}
          className="-mt-1 bg-[#3700b3] text-center text-[white] rounded-lg border-none h-8 w-16"
        >
          <b>Delete</b>
        </button>
      </div>
      <h2 style={{ marginBottom: -6 }}>{transaction.name}</h2>
      <div className="flex flex-row justify-between">
        <p style={{ marginBottom: -3 }}>
          <i>Details:</i>
          <br />
          {transaction.desc}
        </p>
        <p style={{ marginBottom: -3 }}>
          <i>Logged at: </i>
          <br />
          {formattedDate}
        </p>
      </div>
    </div>
  );
};

export default TransactionCard;

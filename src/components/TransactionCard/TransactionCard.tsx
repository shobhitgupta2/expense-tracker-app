import "./TransactionCard.css";

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
    <div className="card">
      <div className="card-header">
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
          className="remove-button"
        >
          <b>Delete</b>
        </button>
      </div>
      <h2 style={{ marginBottom: -6 }}>{transaction.name}</h2>
      <div className="card-bottom">
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

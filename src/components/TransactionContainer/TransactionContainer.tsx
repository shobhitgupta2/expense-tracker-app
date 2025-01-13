import "./TransactionContainer.css";
import TransactionCard from "../TransactionCard/TransactionCard.tsx";

type TransactionData = {
  id: number;
  name: string;
  type: string;
  amount: number;
  desc: string;
};

interface TransactionDataProps {
  transactions: TransactionData[];
  onDelete: (id: number) => void;
}

const TransactionContainer = ({
  transactions,
  onDelete,
}: TransactionDataProps) => {
  return (
    <div className="transaction-container">
      {transactions
        .slice(0)
        .reverse()
        .map((transaction: TransactionData) => (
          <TransactionCard
            key={transaction.id}
            transaction={transaction}
            onDelete={onDelete}
          />
        ))}
    </div>
  );
};

export default TransactionContainer;

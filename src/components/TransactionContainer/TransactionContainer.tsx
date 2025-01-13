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
    <div className="h-full w-1/2 overflow-scroll overflow-x-hidden overflow-y-auto">
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

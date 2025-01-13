import Sidebar from "../Sidebar/Sidebar.tsx";
import TransactionContainer from "../TransactionContainer/TransactionContainer.tsx";
import {
  addTransaction,
  deleteTransaction,
} from "../../transactionListSlice.ts";
import { useDispatch, useSelector } from "react-redux";
import type { RootState } from "../../store";

interface TransactionData {
  id: number;
  name: string;
  type: string;
  amount: number;
  desc: string;
}

const Display = () => {
  const transactions =
    useSelector((state: RootState) => state.transactions.transactions) || [];
  const dispatch = useDispatch();
  const handleAddTransaction = (transactionData: TransactionData) => {
    fetch("https://jsonplaceholder.typicode.com/posts", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(transactionData),
    })
      .then((res) =>
        res.ok
          ? dispatch(addTransaction(transactionData))
          : console.log("Could not add Transaction!"),
      )
      .catch((error) => console.log("Error:", error));
  };

  const handleDeleteTransaction = (i: number) => {
    fetch(`https://jsonplaceholder.typicode.com/posts/${i}`, {
      method: "DELETE",
    }).then((res) => {
      if (res.ok) {
        // Find the transaction to delete
        const transactionToDelete = transactions.find((t) => t.id === i);
        if (transactionToDelete) {
          dispatch(deleteTransaction(transactionToDelete));
        }
      } else {
        console.log("Transaction Deletion Failed!");
      }
    });
  };
  return (
    <div className="flex flex-row fixed top-0 bottom-0 right-0 left-0">
      <Sidebar onSubmit={handleAddTransaction} />
      <TransactionContainer
        transactions={transactions}
        onDelete={handleDeleteTransaction}
      />
    </div>
  );
};

export default Display;

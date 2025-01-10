import { useEffect, useState } from "react";
import "./Display.css";
import Sidebar from "./components/Sidebar/Sidebar.tsx";
import TransactionContainer from "./components/TransactionContainer/TransactionContainer.tsx";

interface TransactionData {
  id: number;
  name: string;
  type: string;
  amount: number;
  desc: string;
}

const Display = () => {
  const [transactions, setTransactions] = useState(() => {
    const savedTransactions = localStorage.getItem("transactions");
    return savedTransactions ? JSON.parse(savedTransactions) : [];
  });
  const addTransaction = (transactionData: TransactionData) => {
    console.log("The transaction is:", transactionData);

    fetch("https://jsonplaceholder.typicode.com/posts", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(transactionData),
    })
      .then((res) =>
        res.ok
          ? setTransactions([...transactions, transactionData])
          : console.log("Transaction Addition Failed!"),
      )
      .catch((error) => console.log("Error:", error));
  };

  useEffect(() => {
    localStorage.setItem("transactions", JSON.stringify(transactions));
  }, [transactions]);

  const deleteTransaction = (i: number) => {
    setTransactions(
      transactions.filter(
        (transaction: TransactionData) => transaction.id !== i,
      ),
    );
    console.log(
      "Deleted Transaction: ",
      transactions.filter(
        (transaction: TransactionData) => transaction.id === i,
      ),
    );

    fetch(`https://jsonplaceholder.typicode.com/posts/${i}`, {
      method: "DELETE",
    }).then((res) =>
      res.ok
        ? setTransactions(
            transactions.filter(
              (transaction: TransactionData) => transaction.id !== i,
            ),
          )
        : console.log("Transaction Deletion Failed!"),
    );
  };
  return (
    <div className="container">
      <Sidebar onSubmit={addTransaction} />
      <TransactionContainer
        transactions={transactions}
        onDelete={deleteTransaction}
      />
    </div>
  );
};

export default Display;

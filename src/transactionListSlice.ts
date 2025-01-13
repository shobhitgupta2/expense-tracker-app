import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

interface TransactionItem {
  id: number;
  name: string;
  type: string;
  amount: number;
  desc: string;
}

interface TransactionListState {
  transactions: TransactionItem[];
}

const initialState: TransactionListState = {
  transactions: [],
};

const transactionListSlice = createSlice({
  name: "transactions",
  initialState,
  reducers: {
    addTransaction: (state, action: PayloadAction<TransactionItem>) => {
      state.transactions.push(action.payload);
    },
    deleteTransaction: (state, action: PayloadAction<TransactionItem>) => {
      state.transactions = state.transactions.filter(
        (transaction) => transaction.id !== action.payload.id,
      );
    },
  },
});

export const { addTransaction, deleteTransaction } =
  transactionListSlice.actions;
export default transactionListSlice.reducer;

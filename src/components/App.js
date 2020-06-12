import React, { useState, useEffect } from 'react';
import { v4 as uuid4 } from 'uuid';

import BalanceSummary from './BalanceSummary';
import HistoryList from './HistoryList';
import AddTransaction from './AddTransaction';

import '../styles/app.css';

export const TransactionContext = React.createContext();
const transactionKey = 'ExpenseTracker.transactions';

function App() {
  const [transactions, setTransactions] = useState(sampleTransactions);

  useEffect(() => {
    const storedTransactions = JSON.parse(localStorage.getItem(transactionKey));
    storedTransactions && setTransactions(storedTransactions);
  }, []);

  useEffect(() => {
    localStorage.setItem(transactionKey, JSON.stringify(transactions));
  }, [transactions]);

  const contextValue = {
    transactions,
    addTransaction,
    deleteTransaction,
  };

  function addTransaction(transaction) {
    setTransactions([...transactions, transaction]);
  }

  function deleteTransaction(id) {
    const newTransactions = transactions.filter((t) => t.id !== id);
    setTransactions(newTransactions);
  }

  return (
    <TransactionContext.Provider value={contextValue}>
      <div className="expense-tracker">
        <h2 className="expense-tracker__title">Expense Tracker</h2>
        <BalanceSummary />
        <HistoryList />
        <AddTransaction />
      </div>
    </TransactionContext.Provider>
  );
}

const sampleTransactions = [
  { id: uuid4(), text: 'Book', amount: +9 },
  { id: uuid4(), text: 'Petrol', amount: -100 },
];

export default App;

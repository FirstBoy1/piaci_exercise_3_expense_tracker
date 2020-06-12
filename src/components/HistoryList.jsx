import React, { useContext } from 'react';
import HistoryItem from './HistoryItem';

import { TransactionContext } from './App';

export default function HistoryList() {
  const { transactions, deleteTransaction } = useContext(TransactionContext);

  return (
    <div className="history-list">
      <h4 className="history-list__title">History</h4>
      {transactions.map((t) => (
        <HistoryItem key={t.id} {...t} deleteTransaction={deleteTransaction} />
      ))}
    </div>
  );
}

import React from 'react';

export default function HistoryItem({ id, text, amount, deleteTransaction }) {
  return (
    <div className={`history-item ${amount < 0 ? 'border-red' : ''}`}>
      <button
        onClick={() => deleteTransaction(id)}
        className="history-item__delete-btn"
      >
        &times;
      </button>
      <span className="history-item__name">{text}</span>
      <span className="history-item__value">
        {amount > 0 ? '+' : ''}
        {amount}
      </span>
    </div>
  );
}

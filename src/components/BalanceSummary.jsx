import React, { useContext } from 'react';
import { TransactionContext } from './App';

export default function BalanceSummary() {
  const { transactions } = useContext(TransactionContext);
  const totalBalance = transactions.reduce(
    (total, trans) => total + trans.amount,
    0
  );
  const incomeBalance = transactions.reduce(
    (total, { amount }) => (amount > 0 ? total + amount : total),
    0
  );
  const expenseBalance = transactions.reduce(
    (total, { amount }) => (amount < 0 ? total + amount : total),
    0
  );

  return (
    <div className="balance-summary">
      <div className="balance-summary__title">Your Balance</div>
      <div className="balance-summary__total">${totalBalance.toFixed(2)}</div>
      <div className="balance-summary__income-expense-container">
        <div className="income-expense-item">
          <span className="income-expense-item__title">Income</span>
          <span className="income-expense-item__total income-color">
            ${incomeBalance.toFixed(2)}
          </span>
        </div>
        <div className="income-expense-item">
          <span className="income-expense-item__title">Expense</span>
          <span className="income-expense-item__total expense-color">
            ${expenseBalance.toFixed(2)}
          </span>
        </div>
      </div>
    </div>
  );
}

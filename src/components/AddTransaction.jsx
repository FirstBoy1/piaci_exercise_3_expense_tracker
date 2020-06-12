import React, { useState, useContext } from 'react';
import { v4 as uuid4 } from 'uuid';
import { TransactionContext } from './App';

const initialState = { text: '', amount: '' };

export default function AddTransaction() {
  const [state, setState] = useState(initialState);
  const { addTransaction } = useContext(TransactionContext);

  function handleChange(e) {
    const { name, value } = e.target;
    setState({ ...state, [name]: value });
  }

  function handleSubmit(e) {
    e.preventDefault();
    if (!state.text && !state.amount) {
      alert('Enter text and amount');
      return;
    }
    if (state.amount === '0') {
      alert("Amount can't be 0");
      return;
    }
    addTransaction({ id: uuid4(), ...state, amount: parseInt(state.amount) });
    setState(initialState);
  }

  return (
    <div className="add-transaction">
      <h4 className="add-transaction__title">Add new transaction</h4>
      <form onSubmit={handleSubmit} className="add-transaction__form">
        <label htmlFor="text" className="add-transaction__label">
          Text
        </label>
        <input
          type="text"
          id="text"
          onChange={handleChange}
          name="text"
          value={state.text}
          placeholder="Enter text..."
          className="add-transaction__input"
          autoComplete="off"
        />
        <label htmlFor="amount" className="add-transaction__label">
          Amount<br></br> (negative - expense, positive - income)
        </label>
        <input
          type="number"
          id="amount"
          onChange={handleChange}
          name="amount"
          value={state.amount}
          placeholder="Enter amount..."
          className="add-transaction__input"
        />
        <button type="submit">Add Transaction</button>
      </form>
    </div>
  );
}

import React, { useState } from "react";
import "./ExpenseForm.css";

const ExpenseForm = (props) => {
  const [enterdTitle, setEnteredTitle] = useState("");
  const [enterdAmount, setEnteredAmount] = useState("");
  const [enterdDate, setEnteredDate] = useState("");

  const titleChangeHandler = (event) => {
    setEnteredTitle(event.target.value);
  };

  const amountChangeHandler = (event) => {
    setEnteredAmount(event.target.value);
  };

  const dateChangeHandler = (event) => {
    setEnteredDate(event.target.value);
  };

  const submitHandler = (event) => {
    event.preventDefault();
    const expenseData = {
      title: enterdTitle,
      amount: enterdAmount,
      date: new Date(enterdDate),
    };
    props.onSaveExpenseData(expenseData);

    console.log(expenseData);
    setEnteredTitle("");
    setEnteredAmount("");
    setEnteredDate("");
  };
  return (
    <form className="expense-form" onSubmit={submitHandler}>
      <div className="expense-form__controls">
        <div className="expense-form__control">
          <label htmlFor="title">Title</label>
          <input
            type="text"
            id="title"
            placeholder="Enter title"
            value={enterdTitle}
            onChange={titleChangeHandler}
          />
        </div>
        <div className="expense-form__control">
          <label htmlFor="amount">Amount</label>
          <input
            type="number"
            id="amount"
            min="0.01"
            step="0.01"
            placeholder="Enter amount"
            value={enterdAmount}
            onChange={amountChangeHandler}
          />
        </div>
        <div className="expense-form__control">
          <label htmlFor="date">Date</label>
          <input
            type="date"
            id="date"
            value={enterdDate}
            onChange={dateChangeHandler}
          />
        </div>
      </div>
      <div className="expense-form__actions">
        <button type="submit" className="expense-form__button">
          Add Expense
        </button>
      </div>
    </form>
  );
};

export default ExpenseForm;

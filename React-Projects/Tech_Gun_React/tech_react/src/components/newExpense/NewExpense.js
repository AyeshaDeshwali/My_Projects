import React from "react";
import "./NewExpense.css";
import ExpenseForm from "./ExpenseForm";
const NewExpense = (props) => {
  const saveExpenseHandler = (enterdata) => {
    console.log(enterdata);
    const expendData = {
      ...enterdata,
      id: Math.random().toString(),
    };

    props.onAddExpense(expendData);
    console.log(expendData);
  };
  return (
    <div className="new-expense">
      <ExpenseForm onSaveExpenseData={saveExpenseHandler} />
    </div>
  );
};

export default NewExpense;

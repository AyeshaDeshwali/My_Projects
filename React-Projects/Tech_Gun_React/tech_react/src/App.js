import "./index.css";
import React, { useState, useEffect } from "react";
import NewExpense from "./components/newExpense/NewExpense";
import Expenses from "./components/Expenses/Expenses";

let DummyExpense = [
  {
    id: "e1",
    title: "School Fee",
    amount: 250,
    date: new Date(2024, 8, 4),
  },
  {
    id: "e2",
    title: "Books",
    amount: 210,
    date: new Date(2024, 8, 6),
  },
  {
    id: "e3",
    title: "House Rent",
    amount: 340,
    date: new Date(2024, 8, 10),
  },
  {
    id: "e4",
    title: "Foods",
    amount: 550,
    date: new Date(2024, 8, 8),
  },
];

const App = () => {
  const [expenses, setExpenses] = useState(DummyExpense);

  // Fetch Data from API
  function fetchData() {
    fetch("http://localhost:3000/api/expenses")
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        console.log(data);
        setExpenses(data);
      })
      .catch((error) => {
        console.error("There was a problem with the fetch operation:", error);
      });
  }

  // Fetch data once on component mount using useEffect
  useEffect(() => {
    fetchData();
  }, []);

  // Add Expense Handler
  const addExpenseHandler = (expense) => {
    fetch("http://localhost/sample-api/api/create.test", {
      method: "POST",
      body: JSON.stringify(expense),
      headers: { "Content-Type": "application/json" },
    }).then((response) => {
      fetchData(); // Refresh the expenses after posting the new expense
    });
  };

  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses item={expenses} />
    </div>
  );
};

export default App;

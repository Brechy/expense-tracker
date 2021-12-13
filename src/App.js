import React from "react";

import NewExpense from "./components/NewExpense/NewExpense";
import Expenses from "./components/Expenses/Expenses";

const App = () => {
  //array of expenses for current use, remove once adding expenses works
  const expenses = [
    {
      id: "e1",
      title: "Birthday cake for Jamo",
      amount: 100.0,
      date: new Date(2021, 12, 11),
    },
    {
      id: "e2",
      title: "Kneeling Chair for Jamo",
      amount: 55.0,
      date: new Date(2021, 12, 11),
    },
    {
      id: "e3",
      title: "Blankets for Jamo",
      amount: 864.0,
      date: new Date(2021, 12, 11),
    },
    {
      id: "e4",
      title: "Coffee for Jamo",
      amount: 864.0,
      date: new Date(2021, 12, 11),
    },
  ];
  
  //confirm expenses data arrives as expected
  const addExpenseHandler = (expense) => {
    console.log('Arrived safely in App.js');
    console.log(expense);
  };

  //under the hood react
  //return React.createElement(
  //  'div',
  //   {},
  //   React.createElement('h2', {}, "Lets get started!"),
  //   React.createElement(Expenses, { items: expenses })
  // );

  return (
    <div className="App">
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses items={expenses} />
    </div>
  );
};

export default App;

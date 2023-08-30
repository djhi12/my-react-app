import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import './App.css';
import ExpenseDetails from './components/expense-details/ExpenseDetails';
import NewExpense from './components/new-expense/NewExpense';
import ExpensesFilter from './components/expense-details/ExpenseFilter';

function App() {
  const date = new Date(2023, 7, 15); // Month is 0-indexed, so August is 7

  const staticDate = {
    month: date.toLocaleString('default', { month: 'long' }),
    day: date.getDate(),
    year: date.getFullYear(),
  };

  const expenses = [
    { id: 'e1', title: 'Car Insurance', amount: 295.45, date: staticDate },
    { id: 'e2', title: 'Medical', amount: 495.45, date: staticDate },
  ];

  // Filter Change
  const [filteredYear, setFilteredYear] = useState('2020');
  const filterChangeHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
  };

  return (
    <div className='container App'>
      {/* New Expense */}
      <div className='container__new-expense'>
        <NewExpense />
      </div>

      {/* Expense Filter */}
      <ExpensesFilter selected={filteredYear} onChangeFilter={filterChangeHandler} />

      {/* Expense Details */}
      <div className='container__expense-details'>
        {expenses.map((expense) => (
          <ExpenseDetails
            key={expense.id}
            title={expense.title}
            amount={expense.amount}
            date={expense.date}
          />
        ))}
      </div>
    </div>
  );
}

export default App;

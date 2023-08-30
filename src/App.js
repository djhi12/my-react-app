import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import './App.css';
import NewExpense from './components/new-expense/NewExpense';
import ExpensesFilter from './components/expense-details/ExpenseFilter';
import Expenses from './components/expense-details/Expenses';

function App() {
  const date = new Date(2023, 6, 15); // Note: Months are zero-based, so 6 represents July.

  const staticDate = {
    month: date.toLocaleString('default', { month: 'long' }),
    day: date.getDate(),
    year: date.getFullYear(),
  };

  const expenses = [
    { id: 'e1', title: 'Car Insurance', amount: 295.45, date: staticDate },
    { id: 'e2', title: 'Medical', amount: 495.45, date: staticDate },
  ];

  const [filteredYear, setFilteredYear] = useState('2020');
  const filterChangeHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
  };

  return (
    <div className='container App'>
      <div className='container__new-expense'>
        <NewExpense expenses={expenses} /> {/* Pass expenses as props */}
      </div>
      <ExpensesFilter selected={filteredYear} onChangeFilter={filterChangeHandler} />
      <Expenses items={expenses} /> {/* Pass expenses as items */}
    </div>
  );
}

export default App;

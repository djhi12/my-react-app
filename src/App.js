import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import './App.css';
import ExpenseDetails from './components/expense-details/ExpenseDetails';
// import NewExpense from './components/new-expense/NewExpense';
import NewExpense from './components/new-expense/NewExpense';
import ExpensesFilter from './components/expense-details/ExpenseFilter';

function App() {

  const date = new Date(7, 15, 2023);

  const staticDate = {
    month: date.toLocaleString('default', { month: 'long' }),
    day: date.getDate(),
    year: date.getFullYear(),
  }

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
        <ExpenseDetails
          date={expenses[0].date}
          title={expenses[0].title}
          amount={expenses[0].amount}
        />
      </div>
      <div className='container__expense-details'>
        <ExpenseDetails
          date={expenses[1].date}
          title={expenses[1].title}
          amount={expenses[1].amount}
        />
      </div>
    </div >

  );
}

export default App;

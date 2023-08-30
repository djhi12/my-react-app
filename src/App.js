import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import './App.css';
import ExpenseDetails from './components/expense-details/ExpenseDetails';
import NewExpense from './components/new-expense/NewExpense';
import ExpensesFilter from './components/expense-details/ExpenseFilter';

const currentDate = new Date();
const currentYear = currentDate.getFullYear();

const staticDate = {
  month: currentDate.toLocaleString('default', { month: 'long' }),
  day: currentDate.getDate(),
  year: currentDate.getFullYear(),
};

const initialExpenses = [
  { id: 'e1', title: 'Car Insurance', amount: 295.45, date: staticDate },
  { id: 'e2', title: 'Medical', amount: 495.45, date: staticDate },
];

function App() {
  const [expenseItems, setExpenseItems] = useState(initialExpenses);

  const addExpenseHandler = (expense) => {
    setExpenseItems((prevExpenses) => {
      return [expense, ...prevExpenses];
    });
  };

  const [filteredYear, setFilteredYear] = useState(currentYear);

  const filterChangeHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
  };

  const filteredExpenses = expenseItems.filter(
    (expense) => expense.date.year === filteredYear
  );

  return (
    <div className='container App'>
      <div className='container__new-expense'>
        <NewExpense onAddExpense={addExpenseHandler} />
      </div>

      <ExpensesFilter
        selected={filteredYear}
        onChangeFilter={filterChangeHandler}
      />

      <div className='container__expense-details'>
        {filteredExpenses.map((expense) => (
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

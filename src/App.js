import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import './App.css';
import ExpenseDetails from './components/expense-details/ExpenseDetails';
// import NewExpense from './components/new-expense/NewExpense';
import NewExpenseForm from './components/new-expense/NewExpenseForm';

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

  return (
    <div className='container App'>
      {/* <div className='container__header-box'>
        <h1 className='container__header'>Expense Tracker</h1>
      </div> */}

      {/* New Expense */}
      <div className='container__new-expense'>
        <NewExpenseForm />
      </div>

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

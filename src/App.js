import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import './App.css';
import ExpenseDetails from './components/expense-details/ExpenseDetails';

function App() {

  const date = new Date(7, 15, 2023);

  const staticDate = {
    month: date.toLocaleString('default', { month: 'long' }),
    day: date.getDate(),
    year: date.getFullYear(),
  }

  const expenses = [
    { title: 'Car Insurance', amount: 295.45, date: staticDate },
    { title: 'Medical', amount: 495.45, date: staticDate },
  ];

  return (
    <div className='App'>
      <h1>Expense Tracker</h1>
      <ExpenseDetails
        date={expenses[0].date}
        title={expenses[0].title}
        amount={expenses[0].amount}
      />
    </div>

  );
}

export default App;

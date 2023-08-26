import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
// import './App.css';
// import ExpenseItem from './components/ExpenseItem';
// import Expenses from './components/Expenses';
import ExpenseDetails from './components/expense-details/ExpenseDetails';

function App() {


  const expenses = [
    { title: 'Car Insurance', amount: 295.45, date: new Date() },
    { title: 'Medical', amount: 495.45, date: new Date() },
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

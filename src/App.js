import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
// import './App.css';
// import ExpenseItem from './components/ExpenseItem';
// import Expenses from './components/Expenses';

function App() {

  const expenses = [
    { title: 'Car Insurance', amount: 295.45, date: new Date(8, 26, 2023) },
    { title: 'Medical', amount: 495.45, date: new Date(8, 26, 2023) },
  ];

  return (
    <div className='App'>
      <div>{expenses[0].date.toISOString}</div>
      <div>{expenses[0].title}</div>
      <div>{expenses[0].amount}</div>
    </div>

  );
}

export default App;

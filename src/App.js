import 'bootstrap/dist/css/bootstrap.min.css';
// import './App.css';
// import ExpenseItem from './components/ExpenseItem';
import Expenses from './components/Expenses';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Expenses expenses={Expenses} />
      </header>
    </div>

  );
}

export default App;

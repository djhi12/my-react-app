import '../new-expense/NewExpense.css';
import NewExpenseForm from './NewExpenseForm';


function NewExpense() {

    const saveExpenseDataHandler = (enteredExpenseData) => {
        const expenseData = {
            ...enteredExpenseData,
            id: Math.random().toString()
        };
        console.log(expenseData)
    };

    return (
        <div>
            <NewExpenseForm onSaveExpenseData={saveExpenseDataHandler} />
        </div>
    );
}

export default NewExpense;
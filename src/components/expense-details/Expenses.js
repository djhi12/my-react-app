import '../expense-details/Expenses.css';
import ExpenseDetails from './ExpenseDetails';

function Expenses(props) {
    return (
        <div className="expenses-container">
            <div className='container__expense-details'>
                <ExpenseDetails
                    date={props.expenses[0].date}
                    title={props.expenses[0].title}
                    amount={props.expenses[0].amount}
                />
            </div>
            <div className='container__expense-details'>
                <ExpenseDetails
                    date={props.expenses[1].date}
                    title={props.expenses[1].title}
                    amount={props.expenses[1].amount}
                />
            </div>
        </div>
    );
}

export default Expenses;
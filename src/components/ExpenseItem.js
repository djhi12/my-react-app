import './ExpenseItem.css';
import ExpenseDate from './ExpenseDate';
import ExpenseTitle from './ExpenseTitle';
import ExpenseAmount from './ExpenseAmount';

function ExpenseItem(props) {
    return (
        <div className="expense-item container">
            <div className='row bg-success text-white text-center align-middle p-2 rounded'>
                <ExpenseDate date={props.date} />
                <ExpenseTitle title={props.title} />
                <ExpenseAmount amount={props.amount} />
            </div>
        </div>
    );
}

export default ExpenseItem;
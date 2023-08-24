import './ExpenseAmount.css';
import Card from './Card';

function ExpenseAmount(props) {

    return (
        <Card className='expense-item_price col-sm align-bottom rounded'>
            <div>{props.amount}</div>
        </Card>
    )
}


export default ExpenseAmount;
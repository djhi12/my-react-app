function ExpenseDetails(props) {

    return (
        <div className='expense-details'>
            {/* Expense Date */}
            <div className='date'>
                <div>{props.date.month}</div>
                <div>{props.date.day}</div>
                <div>{props.date.year}</div>
            </div>

            {/* Expense title */}
            <div className='title'>{props.title}</div>

            {/* Expense amount */}
            <div className='amount'>{props.amount}</div>
            <button>Button</button>
        </div>
    );
}

export default ExpenseDetails;
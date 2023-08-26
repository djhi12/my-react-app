function ExpenseDetails(props) {

    return (
        <div className='expense-details'>

            {/* Expense date */}
            < div className='date' >
                <div>{props.date.toLocaleString('default', { month: 'long' })}</div>
                <div>{props.date.getDate()}</div>
                <div>{props.date.getFullYear()}</div>
            </div >

            {/* Expense title */}
            < div className='title' > {props.title}</div >

            {/* Expense amount */}
            < div className='amount' > {props.amount}</div >
            <button>Button</button>
        </div>
    )
}


export default ExpenseDetails;
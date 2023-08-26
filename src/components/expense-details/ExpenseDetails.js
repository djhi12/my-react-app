import ExpenseAmount from "./amount/ExpenseAmount";

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


            {/* Expense amount */}
            <ExpenseAmount />
            <button>Button</button>
        </div>
    )
}


export default ExpenseDetails;
import React, { useState } from "react";
// import '../expense-details/ExpenseDetails.css';
// import ExpensesFilter from "./ExpenseFilter";

function ExpenseDetails(props) {
    const [title, setTitle] = useState(props.title);

    const handleEditTitle = () => {
        // Implement the logic to edit the title here
        const newTitle = prompt("Enter the new title:");
        if (newTitle) {
            setTitle(newTitle);
        }
    };

    return (
        <div className='expense-details d-flex justify-content-around align-items-center'>
            {/* Expense Filter */}

            {/* Expense Date */}
            <div className='date expense-details__info'>
                <div>{props.date.month}</div>
                <div>{props.date.day}</div>
                <div>{props.date.year}</div>
            </div>

            {/* Expense title */}
            <div className='title expense-details__info' data-expense-details__info>{title}</div>

            {/* Expense amount */}
            <div className='amount expense-details__info' data-expense-details__info>{props.amount}</div>
            <button type="button" className=" btn btn-outline-primary expense-details__info" onClick={handleEditTitle}>Edit Title</button>
        </div>
    );
}

export default ExpenseDetails;

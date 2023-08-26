import React from 'react';

function ExpenseDate(props) {

    return (
        <div className='date'>
            <div>{props.date.toLocaleString('default', { month: 'long' })}</div>
            <div>{props.date.getDate()}</div>
            <div>{props.date.getFullYear()}</div>
        </div>
    );
}

export default ExpenseDate;
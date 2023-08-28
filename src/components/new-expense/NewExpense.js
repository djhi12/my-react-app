import React, { useState } from 'react';
import '../new-expense/NewExpense.css';
function NewExpense() {

    const [enteredTitle, setTitle] = useState('');
    const [enteredAmount, setAmount] = useState('');
    const [enteredDate, setDate] = useState('');

    const titleChanged = (event) => {
        setTitle(event.target.value);
    };

    const amountChanged = (event) => {
        setAmount(event.target.value);
    };

    const dateChanged = (event) => {
        setDate(event.target.value);
    };

    const submitHandler = (event) => {
        const expenseData = {
            title: enteredTitle,
            amount: enteredAmount,
            date: new Date(enteredDate)
        };

        console.log(expenseData);
    };


    return (
        <form className="card" onSubmit={submitHandler}>
            <div className='card__header-box'>
                <h4 className='card__header'>New Expense</h4>
            </div>
            <div className='card__sub-form'>
                <div class="form-group row">
                    <label for="inputEmail" class="col-sm-2 col-form-label">Title:</label>
                    <div class="col-sm-10">
                        <input type="email" class="form-control" id="inputTitle" placeholder="Type here..." onChange={titleChanged} />
                    </div>
                </div>

                <div class="form-group row">
                    <label for="inputAmount" class="col-sm-2 col-form-label">Amount:</label>
                    <div class="col-sm-10">
                        <input type="number" class="form-control" id="inputAmount" placeholder="Type here..." onChange={amountChanged} />
                    </div>
                </div>

                <div class="form-group row">
                    <label for="inputDate" class="col-sm-2 col-form-label">Date:</label>
                    <div className="col-sm-10">
                        <input type="date" className="form-control" id="inputDate" placeholder="Type here..." onChange={dateChanged} />
                    </div>
                </div>

                <div class="form-group row">
                    <div class="col-sm-10">
                        <button type="submit" class="btn btn-primary">Submit</button>
                    </div>
                </div>
            </div>
        </form>
    );
}


export default NewExpense;
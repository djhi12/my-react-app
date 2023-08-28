import React from "react";
import '../expense-details/ExpenseFilter.css';

function ExpensesFilter() {
    const dropdownChangeHadler = (event) => {
        console.log(event.target.value);
    };

    return (
        <div className="filter-year">
            <select className="form-select" onChange={dropdownChangeHadler} aria-label="Default select example">
                <option selected>Filter year</option>
                <option value="2022">One</option>
                <option value="2021">Two</option>
                <option value="2020">Three</option>
                <option value="2019">Three</option>
            </select>
        </div>
    );
}

export default ExpensesFilter;
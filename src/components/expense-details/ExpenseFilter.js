import React from "react";
import '../expense-details/ExpenseFilter.css';

function ExpensesFilter(props) {
    const dropdownChangeHandler = (event) => {
        props.onChangeFilter(event.target.value);
    };

    return (
        <div className="filter-year">
            <select defaultValue="" className="form-select" onChange={dropdownChangeHandler} aria-label="Default select example">
                <option value="" disabled selected>Filter year</option>
                <option value="2022">2022</option>
                <option value="2021">2021</option>
                <option value="2020">2020</option>
                <option value="2019">2019</option>
            </select>
        </div>
    );
}

export default ExpensesFilter;

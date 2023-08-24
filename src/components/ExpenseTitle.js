import './ExpenseTitle.css';

function ExpenseTitle(props) {

    return (
        <div className='expense-item_description col-sm align-middle'>
            <h2>{props.title}</h2>
        </div>
    );

}

export default ExpenseTitle;
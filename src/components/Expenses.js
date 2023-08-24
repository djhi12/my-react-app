import ExpenseItem from "./ExpenseItem";

function Expenses() {
    const expenses = [
        { title: 'Car Insurance', amount: 295.45, date: new Date() },
        { title: 'Medical', amount: 495.45, date: new Date() },
    ];

    return (
        <div>
            <ExpenseItem
                title={expenses[0].title}
                amount={expenses[0].amount}
                date={expenses[0].date}
            />

            <ExpenseItem
                title={expenses[1].title}
                amount={expenses[1].amount}
                date={expenses[1].date}
            />
        </div>
    );
}

export default Expenses;

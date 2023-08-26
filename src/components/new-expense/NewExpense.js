import '../new-expense/NewExpense.css';
function NewExpense() {

    return (
        <form className="card">
            <div className='card__sub-form'>
                <div className='card__text'>
                    <h4>New Expense</h4>
                </div>
                <div class="form-group row">
                    <label for="inputEmail" class="col-sm-2 col-form-label">Title</label>
                    <div class="col-sm-10">
                        <input type="email" class="form-control" id="inputTitle" placeholder="Title" />
                    </div>
                </div>

                <div class="form-group row">
                    <label for="inputPassword" class="col-sm-2 col-form-label">Amount</label>
                    <div class="col-sm-10">
                        <input type="number" class="form-control" id="inputAmount" placeholder="Amount" />
                    </div>
                </div>

                <div class="form-group row">
                    <label for="inputDate" class="col-sm-2 col-form-label">Date</label>
                    <div className="col-sm-10">
                        <input type="date" className="form-control" id="inputDate" />
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
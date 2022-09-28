import React from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

import BudgetForm from './components/budgetForm';
import BudgetTable from './components/budgetTable';

function Budgeting() {

    return(
        <>
            <h2>Budgeting</h2>
            <BudgetTable/>

            <br/>

            {/* Receipt form and table of expenses will go here. */}
        </>
    )

}

export default Budgeting;
import React from 'react';
import { checkBudget } from '../helper'
import PropTypes from 'prop-types'


const BudgetControl = ({budget, difference}) => {
    return ( 
        <>
            <div className="alert alert-primary">
                Presupuesto: $ {budget}
            </div>
            <div className={checkBudget(budget, difference)}>
                Restante: $ {difference}
            </div>
        </>
     );
}

BudgetControl.propTypes = {
    budget: PropTypes.number.isRequired,
    difference: PropTypes.number.isRequired

}
 
export default BudgetControl;
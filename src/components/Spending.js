import React from 'react';
import PropTypes from 'prop-types'


const Spending = ({spending}) => {
    return ( 
        <li className="gastos">
            <p>
                {spending.name}
                <span className="gasto">$ {spending.quantity}</span>
            </p>
        </li>
     );
}
Spending.propTypes = {
    spending: PropTypes.object.isRequired
}
 
export default Spending;
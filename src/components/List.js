import React from 'react';
import Spending from './Spending'
import PropTypes from 'prop-types'

const List = ({spendings}) => {
    return ( 
        <div className="gastos-realizados">
            <h2>Listado</h2>
            {spendings.map(spending => (
                <Spending 
                    key={spending.id}
                    spending={spending}
                />
            ))}
        </div>
     );
}

List.propTypes = {
    spendings: PropTypes.array.isRequired
}
 
export default List;
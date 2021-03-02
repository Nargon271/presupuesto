import React, { useState } from 'react';
import PropTypes from 'prop-types'
import Error from './Error'

const Pregunta = ({updateBudget, updateDifference, updateQuestion}) => {

    //define state
    const [quantity, updateQuantity] = useState(0)
    const [error, errorHandling] = useState(false)

    //Function that reads Budget
    const defineBudget = e => {
        updateQuantity(parseInt(e.target.value, 10))
    }

    //Submit Budget
    const submitBudget = e => {
        e.preventDefault()

        //validate
        if (quantity < 1 || isNaN(quantity) ) {
            errorHandling(true)
            return
        } 

        //once validated
        errorHandling(false)
        updateBudget(quantity)
        updateDifference(quantity)
        updateQuestion(false)

    }

    return ( 
        <>
            <h2>Coloca tu presupuesto</h2>

            {error ? <Error message="El presupuesto es incorrecto"/> : null}

            <form
                onSubmit={submitBudget}
            >
                <input 
                    type="number"
                    className="u-full-width"
                    placeholder="Coloca tu presupuesto"
                    onChange={defineBudget}
                />

                <input 
                    type="submit"
                    className="button-primary u-full-width"
                    value="Definir presupuesto"
                />
            </form>
        </>
     );
}

Pregunta.propTypes = {
    updateBudget: PropTypes.func.isRequired,
    updateDifference: PropTypes.func.isRequired,
    updateQuestion: PropTypes.func.isRequired
}
 
export default Pregunta;
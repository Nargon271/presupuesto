import React, { useState } from 'react';
import Error from './Error'
import shortid from 'shortid'
import PropTypes from 'prop-types'


const Form = ({saveSpending, saveCreateSpending}) => {

    const [name, saveName] = useState('')
    const [quantity, saveQuantity] = useState(0)
    const [error, errorHandling] = useState(false)
    
    
    const addSpending = e => {
        e.preventDefault()

        //validate
        if (quantity < 1 || isNaN(quantity) || name.trim() === '') {
            errorHandling(true)
            return
        }
        errorHandling(false)

        //build Spending
        const spending = {
            name,
            quantity,
            id: shortid.generate()
        }

        //transfer spending to App component
        saveSpending(spending)
        saveCreateSpending(true)

        //reset Form
        saveName('')
        saveQuantity(0)

    }


    return ( 
        <form
            onSubmit={addSpending}
        >
            <h2>Agrega tus gastos aqui</h2>

            {error ? <Error message="Ambos campos son obligatorios o Presupuesto incorrecto"/>: null}

            <div className="campo">
                <label>Nombre gasto</label>
                <input 
                    type="text"
                    className="u-full-width"
                    placeholder="Ej. Transporte"
                    value={name}
                    onChange={e=> saveName(e.target.value)}
                />
            </div>

            <div className="campo">
                <label>Cantidad gasto</label>
                <input 
                    type="number"
                    className="u-full-width"
                    placeholder="Ej. 300"
                    value={quantity}
                    onChange={e=>saveQuantity( parseInt(e.target.value, 10))}
                />
            </div>

            <input 
                    type="submit"
                    className="button-primary u-full-width"
                    value="Agregar gasto"
                />
        </form>
     );
}

Form.propTypes = {
    saveSpending: PropTypes.func.isRequired,
    saveCreateSpending: PropTypes.func.isRequired
}
 
export default Form;
import React,{useState, useEffect} from 'react';
import Pregunta from './components/Pregunta'
import Form from './components/Form'
import List from './components/List'
import BudgetControl from './components/BudgetControl'

function App() {

  //define States
  const [budget, updateBudget] = useState(0)
  const [difference, updateDifference] = useState(0)
  const [showQuestion, updateQuestion] = useState(true)
  const [spendings, saveSpendings] = useState([])
  const [spending, saveSpending] = useState({})
  const [createSpending, saveCreateSpending] = useState(false)

  //UseEffect that updates difference
  useEffect(() => {
    if (createSpending) {

      //Add new budget
        saveSpendings([
          ...spendings,
          spending
        ])
      
      //Substract from budget
      const lastingBudget = difference - spending.quantity
      updateDifference(lastingBudget)
      
      //reset to false
      saveCreateSpending(false)
      
      }
  }, [spending, createSpending ,spendings, difference])

  //when added a new spending
  
  


  return (
    <div className="container">
      <header>
        <h1>Gasto semanal</h1>
        
        <div className="contenido-principal contenido">
          {showQuestion ?
            (
            <Pregunta 
              updateBudget={updateBudget}
              updateDifference={updateDifference}
              updateQuestion={updateQuestion}
            />
            )
            :
            (
            <div className="row">
              <div className="one-half column">
                  <Form 
                    saveSpending={saveSpending}
                    saveCreateSpending= {saveCreateSpending}
                />
              </div>
              <div className="one-half column">
                  <List 
                    spendings={spendings}
                  />
                  <BudgetControl 
                    budget={budget}
                    difference={difference}
                  />
              </div>
            </div>
            )}
          
          
        </div>
      </header>
    </div>
  );
}

export default App;

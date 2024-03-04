import { useState } from "react"
import Header from "./components/Header"
import UserInput from "./components/UserInput";
import Results from "./components/Results";


function App() {
  
  const [userInput, setUserInput] = useState({
    initialInvestment: 1000,
    annualInvestment: 20000,
    expectedReturn: 8,
    duration:2
  }) 

  const inputIsValid = userInput.duration >= 1;
  function handleChange(inputIdentifier, newValue){
    setUserInput( prevUserInput =>{
        return {
            ...prevUserInput,
            [inputIdentifier] : +newValue // having the + will force type conversion
        }
    } )
  
  }

  
  return (
  <>
  <Header/>
  <UserInput userInput={userInput} onChange={handleChange}  />
  {!inputIsValid && <p>Please enter valid data!</p>}
  {inputIsValid && <Results input={userInput}/>}
  </>
  )
}

export default App

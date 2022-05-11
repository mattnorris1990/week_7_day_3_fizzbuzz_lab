import React, {useState, useEffect} from "react"
import './App.css';

function App() {
  
  const [number, setNumber] = useState(1)
  const [fizzbuzz, setFizzbuzz] = useState(1)
  const [name, setName] = useState("")
  const [userInput, setUserInput] = useState("")
  const [pointlessState, setpointlessState] = useState(0)


  

  useEffect(()=>{
    
      if (number % 3 === 0 && number % 5 === 0) {
        setFizzbuzz("fizzbuzz")
      } else if (number % 3 === 0) {
        setFizzbuzz("fizz")
      } else if (number % 5 === 0) {
        setFizzbuzz("buzz")
      } else {
        setFizzbuzz(number);
      } 

  }, [number])

  useEffect(()=> {
    if (number === 7) {
      setName("Derek")
    }
    else if (number === 22) {
      setName("Matt")
    }
    else {
      setName("")
    }

  },[number])
  
  const handleInc = () => {
    setNumber(number+1)
  }

  const handleuserInputChange = (event) => {
    setUserInput(event.target.value)
  }

  const handlePointlessButton = () => {
    setpointlessState(pointlessState + 1 )
  } 

  
  return (
    <>
    <button onClick={handlePointlessButton} > hello I do nothing</button>
    <p><b> the poitnless state number is{pointlessState}</b></p>
    

    <h2>Number is {number}</h2>
    <button value={number} onClick={handleInc}>+ add to number</button>
    <h3>the correct answer is: {fizzbuzz}</h3>
   {userInput == fizzbuzz ? <p>Correct!</p> : <p>keep guessing!</p>}
    
    {/* <form onSubmit={handleUserInput}> */}
    <form>
      <input type="text" value={userInput} placeholder="make your guess" onChange={handleuserInputChange} />
    </form>

    <h3>{name}</h3>

    </>
  );
}

export default App;

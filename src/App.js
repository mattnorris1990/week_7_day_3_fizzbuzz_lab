import React, {useState, useEffect} from "react"
import './App.css';

function App() {
  
  const [number, setNumber] = useState(1)
  const [fizzbuzz, setFizzbuzz] = useState(1)
  const [name, setName] = useState("")

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

  
  return (
    <>

    <button value={number} onClick={handleInc}>+ add</button>

    <h2>Number is {number}: {fizzbuzz}</h2>
    <h3>{name}</h3>

    </>
  );
}

export default App;

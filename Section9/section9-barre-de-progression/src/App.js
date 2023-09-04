import './App.css';
import Count from "./Count"
import Button from "./Button"
import { useState } from "react"

function App() {

const [countOne, setCountOne ] = useState({
  value: 0,
  btnColor: "green",
  increment: 25
})

const [countTwo, setCountTwo ] = useState({
  value: 0,
  btnColor: "red",
  increment: 20
})

const handleClick1 = (incrVal) => {

      
    setInterval(() => {
      if(countOne.value < 100){

        setCountOne( prev => ({
        ...prev,
        value: prev.value + incrVal
      }
      ))}

    }, 1000)

}

const handleClick2 = (incrVal) => {

  countTwo.value < 100 &&
  setCountTwo( prev => ({
    // ...countTwo,
    ...prev,
    value: prev.value + incrVal
  }))
}


  return (
    <div className="container">
      <Count data = {countOne}/>
      <Count data = {countTwo}/>

      <Button handleClick={handleClick1} incrementValue={countOne.increment} btnColor={countOne.btnColor} />
      <Button handleClick={handleClick2} incrementValue={countTwo.increment} btnColor={countTwo.btnColor}/>

    </div>
  );
}

export default App;

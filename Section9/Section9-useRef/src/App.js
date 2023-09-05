import './App.css';
import Count from "./Count"
import Button from "./Button"
import { useState, useEffect, useRef } from "react"

function App() {

const [countOne, setCountOne ] = useState({
  value: 0,
  btnColor: "green",
  increment: 10
})

const [countTwo, setCountTwo ] = useState({
  value: 0,
  btnColor: "orange",
  increment: 20
})


const stopIntervalRef = useRef()

useEffect(() => {

  stopIntervalRef.current = setInterval(() => {
    if (countRef.current >= 100) {
      console.log("clear (au dessus de 100)")
       clearInterval(stopIntervalRef.current)
    } else{
      console.log("count")
      setCountOne( prev => ({
        ...prev,
        value: prev.value + prev.increment
      }))
    }},1000)

  return () => {
      console.log("clear (le return)")
      clearInterval(stopIntervalRef.current)
  }

},[countOne])

//ca c'est moi qui l'ai fait pas le cours donc possiblement foireux,    
const countRef = useRef()
countRef.current = countOne.value
console.log(countRef.current)

//bouton vert
const restartCount = () => {

  setCountOne({...countOne, value: 0})
}

//bouton orange
const handleClick2 = (incrVal) => {

  countTwo.value < 100 &&
  setCountTwo( prev => ({
    // ...countTwo,
    ...prev,
    value: prev.value + incrVal
  }))
}

//bouton rouge
const stopCount = () => {
  console.log("clear bouton STOP")
  clearInterval(stopIntervalRef.current)
}

  return (
    <div className="container">
      <Count data = {countOne}/>
      <Count data = {countTwo}/>

      <Button handleClick={restartCount} incrementValue={countOne.increment} btnColor={countOne.btnColor} />
      <button onClick={stopCount} style={{backgroundColor: "red", padding: "12px"}}>STOP</button>
      <Button handleClick={handleClick2} incrementValue={countTwo.increment} btnColor={countTwo.  btnColor}/>

    </div>
  );
}

export default App;


//Quand on veut créer une fonction exterieure (bouton stop) qui interagit avec le useEffect, on doit passer
//par userRef pour englober le code avec lequel on veut interagir(setInterval).
//useRef nous donne acces à current à l'interieur de son objet, on peut donc passer des valeurs à stopIntervalRef.current par exemple

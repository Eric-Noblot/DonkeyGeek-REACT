
import './App.css';
import Formulaire from "./components/Formulaire"
import IsSomething from "./components/IsSomething"
import Reducer from "./components/Reducer"
import Reducer2 from "./components/Reducer2"
import Timer from "./components/Timer"
import { useState } from "react"

function App() {

  const [todos, setTodos] = useState([
    
    {id: 1, todo: "acheter du pain"},
    {id: 2, todo: "Apprendre Bootstrap"},
    {id: 3, todo: "Passer le permis"}
    
  ])

    const todosMap = todos.map((todo, index) => {
    return <li key={index}>{todo.todo}</li>
  })

  const addTodo = (newTodo) => {
    setTodos([...todos, {
      id:4, todo: newTodo
    }])
  }

  return (
    <div style={{width: "400px", margin:"10px auto"}} className="App">

      <h1>Todo list</h1>
         <ul>
          {todosMap}
        </ul>
      <Formulaire addTodo={addTodo}/>
      <hr />

      <IsSomething />
      <hr />

      <Reducer />
      <hr />

      <Reducer2 />
      <hr />

      <Timer /> 
    </div>
  );
}

export default App;

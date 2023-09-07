import './App.scss';
import User from "./User"
import { useState, useEffect } from "react"
import Buttons from "./Buttons"

function App() {

  const [user, setUser] = useState("")
  const [userCount, setUserCount] = useState(1)
  const [pictures, setPictures ] = useState("")

  const newUser = () => {

    if (userCount  === 10 ) {
      setUserCount(1)
    } else {
      setUserCount(prevCont => (
      prevCont + 1))
    }
  }

  const resetUser = () => {
    setUserCount(1)
  }

  const prevUser = () => {
    if (userCount === 1 ) {
      setUserCount(10)
    } else {
      setUserCount(prevCount => prevCount - 1)
    }
  }

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/users/${userCount}`)
    .then(res => res.json())
    .then(data => setUser(data))
    .catch(err => console.log("erreur!" , err))

  },[userCount])

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/photos/${userCount}`)
    .then(res => res.json())
    .then(data => setPictures(data))
    .catch(err => console.log("erreur!" , err))

  },[userCount])


  return (
    <div className="container">
        <User user={user} pictures={pictures}/>
        <Buttons newUser ={newUser} resetUser={resetUser} prevUser={prevUser} />
    </div>
  );
}

export default App;




  // fetch("https://jsonplaceholder.typicode.com/users/2")
  // .then (res => res.json())
  // .then(data => setState(data))

  
// const test = async () => {

  // const response = await fetch("https://jsonplaceholder.typicode.com/users/2")
  // const data = await response.json()

// }

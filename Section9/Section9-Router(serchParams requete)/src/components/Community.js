import {useEffect} from 'react'
import { useNavigate } from "react-router-dom"

function Community() {

  const navigate = useNavigate()

  useEffect(() => {

    const timeOut = setTimeout(() => {
      navigate("/")
    }, 5000)

    return () => {
      clearTimeout(timeOut)
    }

  },[])


  return (
    <div className="container">
        <h2 style={{color: "green"}}>Redirection auto vers page d'accueil dans 5 secondes ! (setTimeOut)</h2>
        <button onClick={() => navigate("/tutorial")} className="btn btn-primary">Vers tutorial</button>
    </div>
  )
}

export default Community
import React from 'react'
import { useNavigate } from "react-router-dom"

function Tutorials() {

  const navigate = useNavigate()

  return (
    <div className="container">
        <h1>Tutoriel: Intro to React</h1>
        <button onClick={() => navigate(-1)} className="btn btn-primary">Retour en arrière</button>
        
        {/* //on appelle notre fonction navigate avec comme argument -1, qui va donc renvoyer la page précédente enregistrer dans l'ordre de navigation */}
        <button onClick={() => navigate("/community")} className="btn btn-success">Vers community</button>

    </div>
  )
}

export default Tutorials
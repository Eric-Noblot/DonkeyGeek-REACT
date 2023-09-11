import React from 'react'
import { useNavigate, Link, Outlet } from "react-router-dom"

function Docs() {

  const navigate = useNavigate()

  return (
    <div className="container">

      <h1>Getting Started</h1>
      <button onClick={() => navigate("/tutorial")} className="btn btn-primary">Vers Tutorial</button>
      <hr/>

      <nav className="nav">
        <Link to="lien1" className="nav-link">Lien1</Link>
        <Link to="lien2" className="nav-link">Lien2</Link>
        <Link to="lien3" className="nav-link">Lien3</Link>
      </nav>

      <Outlet /> {/* Le composant Outlet va contenir l'information du Link surlequel on va cliquer et indiquer au router quel élément render à la place */}

    </div>
  )
}

export default Docs
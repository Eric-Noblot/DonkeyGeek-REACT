import { Component } from 'react';

import "./app.css"
import Formulaire from "./Components/Formulaire"
import CustomBtn from "./Components/CustomBtn"

class App extends Component {

  state = {
    titre: 'Mon Catalogue Voitures'
  }

  render() {
    return (
      <div className='App'>

        <Formulaire />
        <CustomBtn onClick = {() => alert("Hello !")} styledBtn = {{backgroundColor: "yellow", color: "blue", cursor: "pointer"}}>bouton App - Hello ! </CustomBtn>

      </div>
    )
  }
}

export default App;
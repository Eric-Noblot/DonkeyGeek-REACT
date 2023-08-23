import { Component } from "react"
import MyCars from "./Components/MyCars"


// ici la notion de state est fonctionelle seulement parce qu'on est dans une Class
class App extends Component {

  state = {
    titre : "Mon catalogue de voitures",
    color: "green"
  }

  changeTitle = (e) => {
    this.setState({     //setState est la SEULE façon de modifier le state dans une class. On ne modifie jamais directement le state
      titre : "Titre passé en dur" 
    })
  }

  changeTitleViaParams = (titre) => {
    this.setState({
      titre : titre
    })
  }
  //Afin de pouvoir récupérer le titre dans un paramètre, on va devoir déclarer plus bas notre fonction "changeTitleViaParams"
  //à l'interieur d'une autre fonction anonyme. Cela nous permet douvrir les paranthères pour y metter un paramètre
  //sans pour autant que notre fonction se lance au chargement de la page.
  //on utilise donc une 2eme fonction anonyme lorsque on veut passer dees params dans la première

  changeViaValue = (e) => {
    this.setState({
      titre: e.target.value
    })
  }


  render() {

  return (
   <div>
      <MyCars title = {this.state.titre} color={this.state.color}/>
      <button onClick={this.changeTitle} style={{padding: "15px", marginLeft: "300px"}}>Changer le titre en dur</button>
      <button onClick={() => this.changeTitleViaParams("Titre via paramètre de la FN")} style={{padding: "15px", marginLeft: "10px"}}>Changer via les paramètres</button>
      
      <input onChange = {this.changeViaValue}value={this.state.titre} style={{padding: "15px", marginLeft: "10px"}}></input>
    {/*on récupère dans lINPUT par valeur de défaut le State de base du titre */}
    </div>
  )
  }
}

export default App;

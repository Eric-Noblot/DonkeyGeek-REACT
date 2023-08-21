import './App.css';
import { Component } from "react"

import Goku from "./Goku"
import Vegeta from "./Vegeta"

// HOC --> composant d'ordre superieur
// fonction qui prend un composant en paramètre

class App extends Component {


  state = {
    vegeta: 100,
    goku: 100 
  }
  //ici param recoit le nom Goku ou Vegeta
  // param2 recoit la force de Goku ou Vegeta
  reduceLife = (param, param2) => {
    if(param === "Goku") {
      this.setState({
        vegeta: this.state.vegeta - param2
      })
    } else {
        this.setState({
        goku: this.state.goku - param2
      })  
    }
  }

  render() {
    return( 
      <div className= "container">
        <h1>Goku vs Vegeta</h1>
        <div className="row">
          <Goku name="Goku" life={this.state.goku} reduceHandler={this.reduceLife}/>
          <Vegeta name="Vegeta" life={this.state.vegeta} reduceHandler={this.reduceLife}/>
        </div>
      </div>
    )}
  }

  export default App

  //dans cette App on va créer un HoC, qui est une fonction countHits.jsx.
  // Dans la fonction countHits, on crée une class CountHits (maj car composant) qui va renvoyer à countHits le composant
  // WrappedComponent (qui sera Goku ou Vegeta) qui s'occupera de gerer pour les 2 personnages le compteur de frappe.
  // Le but ici est de passer en paramètre de notre HoC (countHits.jsx) un composant, qui lui meme obtiendra des this.props.via 
  // les composant Goku et Vegeta
  //la particularité est quon devra export defaut Goku et Vegeta en les entourant avec le super composant countHits.
  //On envoie donc toute notre class a linterieur de la fonction countHits lors de l'export, qui elle meme va gerer
  //uns sous class CountHits qui va renvoyer un Composant WrappedComponent
  //  Grace à ca, on peut gérer facielement un State
  //pour les degats quon va incrémenter. Chaque personnage à son state indépednant alors qu'on les fait passer tous 
  //les 2 à travers le meme composant. On peut ajouter comme ca plein de perso juste en les entourant de notre higher order component

// Pour gérer la fonction reduceLife, on crée un state dans le parent App. On passe ensuite en props la fonction
// dans les 2 composants Goku et Vegeta. On ne s'occupe pas de cette fonction passé directement dans Goku et Vegeta.
//Puisque ces 2 composants sont englobés dans countHits, c'est là qu'on recoit aussi la props indirectement.
//Donc dans countHits on crée la fonction componentDidUpdate (voir doc), à l'interieur de laquelle on appelle
// this.props.reduceHandler(this.props.name), notre fonction auquel on passe en paramètre le nom du name qu'on recoit (Goku ou Vegeta).
//La fonction reduceLife s'execute dans App et grace au nom qu'on a récupéré, on va pouvoir gérer notre condition
//pour savoir qui a frappé, et donc à qui on enlève des points de vie. C'est clair non???? lol
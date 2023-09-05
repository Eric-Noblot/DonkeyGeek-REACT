import './App.css';
import { useReducer } from "react"

const init = (initialValue) => {
  return {count: initialValue}
}

const reducer = (state, action) => {
  console.log(state, action)
  switch(action.type){
    case "increment":
      return {count: state.count + (action.payload || 1)}
    case "decrement":
      if (state.count <= 0) {
        return state
      }
      return {count: state.count -1}
    case "initialiser":
      return init(0)
    
      default : 
        throw new Error(`L'action ${action.type} ne correspond pas aux choix disponibles`)
  }
}

function App() {

  const [count, dispatch] = useReducer(reducer, 0, init)

  return (
    <div >
      <p>Compteurs: {JSON.stringify(count)}</p>
      <button onClick={()=> dispatch({type: "increment"})}>Incrémente</button>
      <button onClick={()=> dispatch({type: "increment", payload:10})}>Incrémente +10</button>
      <button onClick={()=> dispatch({type: "decrement"})}>Décrémente</button>
      <button onClick={()=> dispatch({type: "initialiser"})}>Initialiser</button>
    </div>
  );
}

export default App;

//UTILISER UN REDUCER
//Même principe que useState, on initialise une variable entre crochets, sauf qu'au lieu de setState on utilise dispatch
//--> const [count, dispatch] = useReducer(reducer, 0, init)
// useReducer peut prendre 3 paramètres,le 1er est la fonction qu'aura notre reducer. On crée donc une fonction(ici reducer),
//qui contiendra un switch qui répertorie toutes la actions possibles. Le 2eme param est la valeur de départ(0);
//lE 3eme paramètre permet d'initialier la valeur de départ pour la transformer par une fonction qui nous renvoie ce quon veut.
//Ici on veut passer notre valeur initiale de 0 dans un objet, on crée une fonction init qui prendra en paramètre
//notre valeur initiale et qui retourne un objet {count: initialValue}

//Notre fonction reducer prend 2 paramètre, state et action. State renvoie l'état du state avant le changement(ici 0),
//et action renvoie la méthode qu'on utilise dans dispatch dans le button --> dispatch({type: "increment"})}.
// Pour récupérer le type d'action on utilise donc dans le switch (action.type), puisque action est un objet qui contient 
//des infos. Pour ajouter un bouton qui +10 par exemple, on passe une 2eme info dans notre dispatch, qu'on appelle payload
//--> dispatch({type: "increment", payload:10})}, et dans notre reducer on fait notre opération. {count: state.count + (action.payload || 1)}
//(action.payload || 1) --> cela signifie que si je n'ai pas précisé dans le dispatch un payload qui contient le nombre
//à incrémenter, le compteur augmentera par defaut de 1. (Soit tu utilises le payload, sois tu mets 1)

//A noter que comme notre valeur attendue est un objet ici, je récupère les données brut quand j'affiche le compteur
//sur la page, on utilise donc <p>Compteurs: {JSON.stringify(count)}</p> pour lire la donnée, sinon msg erreur
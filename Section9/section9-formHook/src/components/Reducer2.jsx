import { useReducer } from 'react';

//  const initialState = 0

const initialState = {
    countOne: 0,
    countTwo: 0
}

//ici action récupère le paramètre quon envoie dans la méthode dispatch sur le onClick du button
const reducer = (state, action) => {
    console.log("STATE: ", state, " ACTION: ", action, "INITIAL STATE: ", initialState)
    switch(action.type) {
        case "incremente": 
            return {...state, countOne: state.countOne + action.value}
        case "decremente": 
            return {...state, countOne: state.countOne - action.value}
        case "incremente2": 
            return {...state, countTwo: state.countTwo + action.value}
        case "decremente2": 
            return {...state, countTwo: state.countTwo - action.value}

        case "initialisation":
            return initialState
        default:
            return state
    }
}

//le paramètre action est l'élément qui donnera l'instruction au reducer pour obtenir un nouvel état
const Reducer2 = () => {


    //prends en paramètre une fonction et un état initial
    const [state, dispatch] = useReducer(reducer, initialState)

    return (
        <div>
            <div>
                <h2>en passant un objet en paramètre : {state.countOne} </h2>
                <button onClick={() => dispatch({type: "incremente", value:1})} style={{padding: "10px", margin: "10px", backgroundColor:"green", color: "white"}}>Ajouter +</button>
                <button onClick={() => dispatch({type: "decremente", value:1})} style={{padding: "10px", margin: "10px", backgroundColor:"red", color: "white"}}>Retirer -</button>
            </div>
            <div>
                <h2>2eme compteur:  <br/>{state.countTwo} </h2>
                <button onClick={() => dispatch({type: "incremente2", value:5})} style={{padding: "10px", margin: "10px", backgroundColor:"green", color: "white"}}>Ajouter +</button>
                <button onClick={() => dispatch({type: "decremente2", value:5})} style={{padding: "10px", margin: "10px", backgroundColor:"red", color: "white"}}>Retirer -</button>
            </div>
                <button onClick={() => dispatch({type: "initialisation"})} style={{padding: "10px", margin: "10px", backgroundColor:"orange", color: "white"}}>Réinitialiser 0 (agit sur les 2 compteurs)</button>
            </div>
    );
};

export default Reducer2;
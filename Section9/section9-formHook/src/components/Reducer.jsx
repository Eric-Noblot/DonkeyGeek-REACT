import { useReducer } from 'react';



//ici action récupère le paramètre quon envoie dans la métho    de dispatch sur le onClick du button
const reducer = (state, action) => {
    switch(action) {
        case "incremente": 
            return state +1
        case "decremente": 
            return state -1
        case "initialisation":
            return initialState
        default:
            return state
    }
}

const initialState = 0

//le paramètre action est l'élément qui donnera l'instruction au reducer pour obtenir un nouvel état
const Reducer = () => {


    //prends en paramètre une fonction et un état initial
    const [state, dispatch] = useReducer(reducer, initialState)

    return (
        <div>
            <div>
                <h2>reducer en passant une string en paramètre: {state} </h2>
                <button onClick={() => dispatch("incremente")} style={{padding: "20px", margin: "10px", backgroundColor:"green", color: "white"}}>Ajouter +</button>
                <button onClick={() => dispatch("decremente")} style={{padding: "20px", margin: "10px", backgroundColor:"red", color: "white"}}>Retirer -</button>
                <button onClick={() => dispatch("initialisation")} style={{padding: "20px", margin: "10px", backgroundColor:"orange", color: "white"}}>Réinitialiser 0</button>
            </div>
        </div>
    );
};

export default Reducer;
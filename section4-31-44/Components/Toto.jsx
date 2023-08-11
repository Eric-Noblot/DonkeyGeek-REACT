import { Component } from "react"

const Toto = ({name, leState, reponseToto}) => {
    const activeButton = leState.reponseMaman ? <button onClick = {reponseToto}>REPONSE TOTO</button> : <button disabled>REPONSE TOTO</button>

    return (
        <div>
            <h2>{name}</h2>
            {activeButton}
            <p>{leState.reponseToto}</p>
        </div>
    )
}

export default Toto
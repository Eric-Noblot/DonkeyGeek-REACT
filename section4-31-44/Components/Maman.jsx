import Toto from "./Toto"
import { Component } from "react"

class Maman extends Component {

    state = {
        reponseMaman: null,
        reponseToto: null,
        disabledMamanButton : true
    }

    responseMaman = () => {

            this.setState({
                reponseMaman: this.state.reponseMaman ? null : "Va ranger ta chambre",
                disabledMamanButton: this.state.reponseMaman ? true : false,
                reponseToto: null
            })

    }

    responseToto = (e) => {

        // e.currentTarget.classList.toggle("RATATOUILLE")
        this.setState({
            reponseToto: "Ok je vais ranger",
            disabledMamanButton: true,
        })

    //     const totoButton = ""
    //     if (this.state.reponseToto !== null) {
    //         totoButton = <button onClick={this.responseMaman }>REPONSE MAMAN</button>
    //         return totoButton
    //     }else {

    //     }
     }

    render() {
        return (
        <>
            <h1>Maman</h1>
            {this.state.disabledMamanButton ? <button onClick={this.responseMaman }>REPONSE MAMAN</button> : <button disabled>REPONSE MAMAN</button> } 
            
            <p>{this.state.reponseMaman}</p>
            <hr />
            <Toto name="Toto" leState = {this.state} reponseToto = {this.responseToto}/>
        </>
        )}
}




export default Maman
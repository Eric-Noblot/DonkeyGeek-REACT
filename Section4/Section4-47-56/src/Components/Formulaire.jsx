import { Component } from "react"
import "./Formulaire.css"
import CustomBtn from "./CustomBtn"


class Formulaire extends Component {

    state = {
        name: "Mario",
        winner: false
    }

    handleState = () => {
        this.setState({
            winner: !this.state.winner
        })
    }
    
    render() {

        const customBtnRed = {
            backgroundColor: "red",
            borderRadius: "20px"
        }

        const customBtnGreen = {
            backgroundColor: "green",
            color: "black",
            cursor: "pointer"
        }

        return (
            <div>
                <h1>Bouton customisable utilisant le destructuring pour écraser le style original de l'objet</h1>
                <hr/>
                <CustomBtn>Grey</CustomBtn>
                <CustomBtn styledBtn = {customBtnRed}>Red</CustomBtn>
                <CustomBtn styledBtn = {customBtnGreen} onClick={this.handleState}>Changer state</CustomBtn>

                <div style={{width :"250px", margin: "25px auto", fontSize: "25px"}}> 
                    {this.state.winner ? `Bravo ${this.state.name}, c'est gagné !`: "Dommage c'est raté !"  }
                </div>

                {/* on utilise Bootstrap ci-dessous */}

            </div>
        )
    }
}

export default Formulaire
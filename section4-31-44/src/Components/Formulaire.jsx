import { Component } from "react"
import Car from "./Car"

class Formulaire extends Component {

    state = {
        pseudoInput: "",
        colors: ["","green", "blue", "red", "yellow", "pink", "orange"],
        color: "",
        selectColor: "",
        commentsInput: "", 
        validation: ""
    }

    handlePseudo = (e) => {
        this.setState({
            pseudoInput: e.target.value
        })
    }

    handleColor = (e) => {
        this.setState({
            color: e.target.value,
            selectColor: e.target.value
        })
    }

    handleComments = (e) => {
        this.setState({
            commentsInput: e.target.value
        })
    }

    handleSubmit = (e) => {
        e.preventDefault()
        console.log(this.state.pseudoInput, this.state.selectColor, this.state.commentsInput)
        if (this.state.pseudoInput !== "" && this.state.selectColor !== "" && this.state.commentsInput !== "") {
            
            this.setState({
                validation: 
                <p style={{color: "gold"}}>
                    {`Félicitations ${this.state.pseudoInput} ! Nous avons bien enregistré la couleur ${this.state.selectColor} pour votre voiture !`}
                    <br/>
                    {`Nous répondrons à votre commentaire (${this.state.commentsInput}) très vite !`}
                </p>})
        } else {
            this.setState({
                validation: <p style={{color: "red"}}>Certaines informations sont manquantes !</p>
            })
        }
    }

    render() {

        return (
            <form onSubmit = {this.handleSubmit}>
                <label htmlFor ="pseudoForm">Pseudo</label>
                <input type ="text" id = "pseudoForm"  value ={this.state.pseudoInput} onChange={this.handlePseudo}></input>
                    <br />

                <label >Color :</label>
                <select style = {{backgroundColor: this.state.selectColor}}onChange={this.handleColor} value={this.state.color}>
                    {
                        this.state.colors.map((color, index) => {
                           return <option className="colorSelect" style={{backgroundColor: `${color}`}} key={index} value={color}>{color}</option>
                        })
                    }
                </select>

                <Car color={this.state.selectColor}/>

                <label>Commentaires : </label>
                <textarea onChange ={this.handleComments} placeholder="Commentaire obligatoire !" value={this.state.commentsInput}></textarea>          
                
                <button style={{fontSize: "1.2em", padding:"15px 40px", backgroundColor:"gold", borderRadius:"20px", marginTop: "25px", width: "250px"}}>Validez</button>
                {this.state.validation}
            
            </form>
        )
    }
}

export default Formulaire
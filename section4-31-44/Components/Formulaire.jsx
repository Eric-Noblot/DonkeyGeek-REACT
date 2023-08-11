import { Component } from "react"

class Formulaire extends Component {

    state = {
        pseudoInput: "",
        colors: ["","green", "blue", "red", "yellow", "pink", "orange"],
        color: "",
        selectColor: ""
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

    render() {

        return (
            <form>
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
            
            
            </form>
        )
    }
}

export default Formulaire
import { Component } from "react"
import Cars from "./Cars"
import Wrapper from "./Wrapper"
import MyHeader from "./MyHeader"

// export class MyCars extends Component {
class MyCars extends Component {

    state = {
        cars: ["Ford", "Ferrari", "Mercedes"]
    }

    render() {
        // console.log(this) // le this c'est un peu comme props quand on met pas dargument, on recupere direct des infos dans l'objet primaire
        const {color} = this.props
        const {title} = this.props //on peut utiliser le destructuring pour récuprer direct le title et à ce momenet là on met juste <h1>{title}</h1>
        return (
            <div className="myCars" style={{width: "400px", margin: "5px auto"}}>
                <Wrapper>
                 {/* <h1 style={{color: color}}>{this.props.title}</h1> */}
                 <MyHeader color = {color} title={this.props.title}/>
                </Wrapper>

                <Cars color="red" >{this.state.cars[0]}</Cars>
                <Cars>Ferrari</Cars>
                <Cars color ="green"></Cars>
            </div>
        )
    }
}

export default MyCars

// --> Si on utilise export default, 
//on recupère dans App via import MyCars from "./Components/MyCars"
//on peut alors changer dans App le nom de la class qu'on veut importer, on aurait pu faire import Voitures from "./Components/MyCars"

// --> Si on utilise directement export avant class (comme dans le comm au debut) on dit qu'on "Named Export"
//on récupère dans App via Import { MyCars } from "./Components/MyCars" !!! ON MET LES {} AUTOUR DU COMPOSANT !!!
//on ne peut pas changer le nom de notre classe récupérée dans App(elle devra avoir le même que déclaré.)

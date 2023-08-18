import { Component } from "react"
import ReactDOM from "react-dom"


class Modal extends Component {

    //on créer à l'interieur de notre constructor div quon va insérer à la racine de notre app pour faire une 2eme root
    //document.body crée directement à la racine
    constructor(props) {
        super(props)

        this.popUpContainer = document.createElement("div")
        document.body.appendChild(this.popUpContainer)
    }

    componentWillUnmount() {
        document.body.removeChild(this.popUpContainer)

    }
    //methode de React permettant davoir accès à un element lors de sa suppression. Le probleme c'est qua chaque fois
    //quon click sur le bouton et quon creer la div ci dessus, on crée aussi la div dans le DOM qui ne part pas
    //lorsqu'on ferme le modal ensuite. On a donc une nouvelle div qui saccumule à chauqe ouverture.
    //Pour ca on va gerer dans la methode componentWillUnmount a la toute fin la suppresion de la div

    render() {

// ReactDOM Portal permet de créer une nouvelle root .nécessite 2 parametres (ce quon veut afficher, dans quoi on veut l'afficher)
        return ReactDOM.createPortal (
            // 1er paramètre
            <div className="modal" onClick={this.props.onClick}> 
                <div>
                <p> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Similique, rerum nesciunt! A cumque ipsam et laudantium iste dicta, nostrum at, incidunt nulla accusamus necessitatibus! Quae, perspiciatis nemo. Nisi sint possimus quidem fugit expedita. Temporibus quia nulla repellendus soluta nesciunt quisquam, suscipit modi dolore optio, inventore hic, quaerat sapiente esse laudantium.</p>
                <button>Fermer</button>
                </div>
            </div>,
            // 2ème paramètre
            this.popUpContainer
        )
    }
}

export default Modal


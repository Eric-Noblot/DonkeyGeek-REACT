import { Component } from 'react';
import "./app.css"
import Modal from "./Components/Modal"

class App extends Component {

  state = {
    showModal : false
  }

  handleShow = () => {
    this.setState({
      showModal: true
    })
  }

  handleHide = () => {
    this.setState({
      showModal: false
    })
  }

  render() {
    // const modal = this.state.showModal ? <Modal /> : null
    const modal = this.state.showModal && <Modal onClick={this.handleHide} />
    return (
      <div className='App'>
        <button onClick={this.handleShow} style={{padding: "25px", backgroundColor: "gold"}}>Afficher le modal</button>
        {modal}
        <hr></hr>
        <div>
          trztrdg
        </div>
      </div>
    )
  }
}

export default App;

//ici on explique comment resoudre le probleme lorsque qu'on veut sortir un enfant dun parent que lon cache à laide
//d'un bouton. Dans index.css et la classe App, si on active la position relative, tout le texte en absolute va s'afficher à 
//relativement au nouveau parent App. Pour faire en sorte d'outrepasser le parent sans enlever la position relative, on va sortir
//la div de notre racine root et créer une 2eme racine dans le DOM.
//Grace aux PORTAL, on peut créer une nouvelle root.
import { Component } from 'react';
import Mycars from './Components/Mycars';
import Maman from "./Components/Maman"
import "./app.css"
import Formulaire from "./Components/Formulaire"

class App extends Component {

  state = {
    titre: 'Mon Catalogue Voitures'
  }

  render() {
    return (
      <div className='App'>
        {/* <Mycars title={this.state.titre} /> */}
        <div className ="container">
        <Maman />
        </div>
        <Formulaire />
      </div>
    )
  }
}

export default App;
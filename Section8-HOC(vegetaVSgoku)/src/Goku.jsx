import { Component } from "react"
import goku from "./img/goku.png"
import countHits from "./countHits"

class Goku extends Component {


    render() {
        
        const {name, higherCmpntState, addFn, life} = this.props

        const lifeResult = life > 0 ? <td>{life}%</td> : <td><span className ="mort">MORT</span></td>
        const button = life > 0 ? <button onClick={addFn} className="punchBtn">{name} frappe</button> :
                                  <button disabled className="punchBtn blackBtn">MORT</button>
        return (
            <div className="col">
                <img src={goku} alt="goku"/><br/>
                {button}

                <table>
                    <thead>
                        <tr>
                            <th>Coups</th>
                            <th>Vie</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>{higherCmpntState}</td>
                            {lifeResult}
                        </tr>
                    </tbody>
                </table>
            </div>
        )
    }
}

export default countHits(Goku, 20)

//on passe en 2eme paramètre la puissance de Goku (20)
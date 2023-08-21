import { Component } from "react"

const countHits = (WrappedComponent, power) => {

    class CountHits extends Component {

        state = {
            hits : 0
        }

        addOne = () => {
            this.setState((prevState) => {
                return{
                    hits: prevState.hits + 1
                }
            })
        }
        
        componentDidUpdate(prevPros, prevState) {
            if (this.state !== prevState) {
                const compName = WrappedComponent.name
                this.props.reduceHandler(this.props.name, power)
            }
        }

        render() {
            return (
                <WrappedComponent {...this.props} higherCmpntState={this.state.hits} addFn={this.addOne}/>
                // <WrappedComponent name={WrappedComponent.name}/>
            )
        }
    }

    return CountHits
}



export default countHits

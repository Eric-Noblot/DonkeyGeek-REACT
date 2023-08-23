import { useState } from "react"

const Formulaire = ({addTodo}) => {

    const [inputValue, setInputValue] = useState("")

    const handleSubmit = (e) =>{
        e.preventDefault()
        if (inputValue !== ""){
            addTodo(inputValue)
            setInputValue("")
        }
    }

    const handleChange = (e) => {
        setInputValue(e.target.value)
    }
    
    return (
        <form onSubmit={handleSubmit}>
            <label style={{marginRight: "10px"}}>Ajouter un to-do</label>
            <input onChange={handleChange} value={inputValue} type="text" style={{marginRight: "10px"}}></input>
            <input type="submit" value="Ajouter to-do" style={{backgroundColor: "pink"}}></input>
        </form>
    )
}

export default Formulaire
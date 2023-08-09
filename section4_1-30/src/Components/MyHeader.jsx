const MyHeader = ({title, color}) => {
    // console.log(children)
    const addStyle = (e) => {
        // console.log(e.target.textContent)
        if (e.target.classList.contains("styled")) {
            e.target.classList.remove("styled")
        } else {
            e.target.classList.add("styled")
        }
        
    }

    const noCopy = () => {
        alert("Ne pas copiez ce texte")
    }
    return(
        <h1 style={{color: color}} onCopy={ noCopy } onMouseOver={addStyle} >{title}</h1>
        //ici MyHeader est une fonction, mais si ca avait été une class on aurait mis {this.addStyle} et enlevé le "const" devant la fonction
    )
}

export default MyHeader
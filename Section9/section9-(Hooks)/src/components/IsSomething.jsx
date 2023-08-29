import { useState } from "react"

const IsSomething = () => {

    const [ inputPalindrome, setInputPalindrome ] = useState("") 
    const [ boolPalindrome, setBoolPalindrome] = useState(false)
    const [ responsePalindrome, setResponsePalindrome] = useState("")
    const [ boolResponsePalindrome, setBoolResponsePalindrome] = useState(false)

    const [ inputAnagramme, setInputAnagramme ] = useState("") 
    const [ inputAnagramme2, setInputAnagramme2 ] = useState("") 
    const [ boolAnagramme, setBoolAnagramme] = useState(false)
    const [ responseAnagramme, setResponseAnagramme] = useState("")
    const [ boolResponseAnagramme, setBoolResponseAnagramme] = useState(false)

    const handleChangePalindrome = (e) => {
        setInputPalindrome(e.target.value)
    }

    const handleChangeAnagramme = (e) => {
        setInputAnagramme(e.target.value)
    }

    const handleChangeAnagramme2 = (e) => {
        setInputAnagramme2(e.target.value)
    }


    const handleClickPalindrome = () => {
        if (inputPalindrome !== "") {
            setBoolPalindrome(true)
            const question = isPalindrome(inputPalindrome)
            if (question) {
                setResponsePalindrome(`Oui, le mot ${inputPalindrome} est un palindrome !`)
                setBoolResponsePalindrome(true)
                setInputPalindrome("")
            }
            else {
                setResponsePalindrome(`Non, le mot ${inputPalindrome} n'est pas un palindrome !`)
                setBoolResponsePalindrome(false)
                setInputPalindrome("")

            }
            return question
        } else {
            setResponsePalindrome("")
        }
    }

    const handleClickAnagramme = () => {
        if (inputAnagramme !== "" && inputAnagramme2 !== "") {
            setBoolAnagramme(true)
            const question = isAnagramme(inputAnagramme, inputAnagramme2)
            if (question) {
                setResponseAnagramme(`Oui, les mots ${inputAnagramme} et ${inputAnagramme2} sont des anagrammes !`)
                setBoolResponseAnagramme(true)
                setInputAnagramme("")
                setInputAnagramme2("")
            }
            else {
                setResponseAnagramme(`Non, les mots ${inputAnagramme} et ${inputAnagramme2} ne sont pas des anagrammes !`)
                setBoolResponseAnagramme(false)
                setInputAnagramme("")
                setInputAnagramme2("")
            }
            return question
        } else {
            setResponseAnagramme("")
        }
    }

    const isPalindrome = (string1) => {
        const string2 = string1.split("").reverse().join("")
        return string1.toLowerCase() === string2.toLowerCase()
        }
      
    const isAnagramme = (stringA, stringB) => {
        const string1 = stringA.split("").sort().join("")
        const string2 = stringB.split("").sort().join("")
        return string1 === string2
    }

    return (
        <div style={{border: "1px solid black", padding:"5px"}}>
            <h1>is something ?</h1>
            <div style={{marginBottom: "15px"}}>
                <label htmlFor="palindrome">Palindrome: </label>
                <input id="palindrome" onChange={handleChangePalindrome} type="text" value={inputPalindrome}></input>
                <button onClick={handleClickPalindrome} style={{backgroundColor:"pink", marginLeft:"15px"}}>Palindrome ?</button>
                {boolPalindrome && <p style={{fontWeight: "bold", color: boolResponsePalindrome ? "green" : "red" }}>{responsePalindrome}</p>}
            </div>
            <div>
                <label htmlFor="anagramme">Anagramme: </label><br/>
                <input id="anagramme" onChange={handleChangeAnagramme} type="text" value={inputAnagramme}></input>
                <input style={{marginLeft: "15px"}} onChange={handleChangeAnagramme2} type="text" value={inputAnagramme2}></input>
                <button onClick={handleClickAnagramme} style={{backgroundColor:"pink", margin:"10px"}}>Anagramme ?</button>
                {boolAnagramme && <p style={{fontWeight: "bold", color: boolResponseAnagramme ? "green" : "red" }}>{responseAnagramme}</p>}
            </div>
        </div>
    )
}

export default IsSomething
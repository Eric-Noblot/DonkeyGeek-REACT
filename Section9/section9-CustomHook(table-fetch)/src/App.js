// finalement le Custom hook invoqué (useFetch) ne marche paste, je l'ai mis en comm. Pour réessayer il faut mettre en comm le use effect et le state entre les les lignes vertes

import './App.css';
import {useState, useEffect}  from "react"
import TableData from "./Components/TableData"
import InputData from "./Components/InputData"
// import useFetch from "./hooks/useFetch"

const App = () => {

  //---------------------------------------------------------------------------------
  const [dataState, setDataState] = useState([])
  const [isLoading, setIsLoading] = useState(true) // ces 2 State + le useEffect qui fetch ont migré dans useFetch pour apprendre à faire des custom hook(ici notr fetch est un custom hook qu'on peut utiliser autant de fois qu'on veut quand on veut fetch)

  useEffect(() => {
    
    fetch("https://jsonplaceholder.typicode.com/users")
    .then(res => res.json())
    .then (data => {
      setDataState(data)
      setIsLoading(false)
    })
    .catch(err => console.log(err))
  },[])
  //--------------------------------------------------------------------------------------
  const [inputValue, setInputValue] = useState("")
  const [resultInput, setResultInput] = useState([])


  // //Custom Hook
  // const {dataState, isLoading} = useFetch("https://jsonplaceholder.typicode.com/users") //on récupère dataState et isLoading via le destructuring(les 2 state quon a return dand useFetch.js)


  
  const filteredData = () => {
    const foundUsers = dataState.filter((data) => {

      return Object.values(data).join(" ").toLowerCase() //objects.values permet de récupérer seulement les résultats (les valeurs) des objets trouvés (en enlevant name,id etc on permet de focus la recherche de la lettré tapée seulement dans les valeurs de l'objet)
      .includes(inputValue.toLowerCase()) 
    })
    setResultInput(foundUsers)
  }

  useEffect(() => { //fonction qui s'enclenche à chaque fois que la valeur de l'input change, va délencher filteredData qui va filtrer les résultats trouvés en mettant à jour setResultInput
    if (inputValue !== "") {
      filteredData()
    }else {
      setResultInput([]) //on met notre tableau à vide (celui qui nous sert pour filtrer les données obtenues en fonction de l'input et qui passe en props pour Tabledata) s'il n'y a pas de données tapées dans la recherche
    }
  },[inputValue])


  const displayMsg = (msg, color) => {
    return (
      <p style={{color: color}}>
        {msg}
      </p>

    )
  }
  const handleChange = (e) => {
      setInputValue(e.target.value)
      // dataState.map((data) => {
      // includingValue = dataState[data].name.toLowerCase().split(" ").join("").includes(e.target.value.toLowerCase())
      // })

  
  }

  return (
    <div className="app">
      <h1>Mes contacts</h1>
      {isLoading ? displayMsg("Loading...", "red") : 
        <>
        <InputData inputChange={handleChange} inputValue={inputValue}/>
        { 
          resultInput.length === 0 && inputValue !== "" ? displayMsg("Pas de résultat !", "red") //si le résultat de notre input ne trouve pas de relation avec les datas(il a une longueur de 0), ET que la barre de recherche(input) n'est pas vide(ca veut dire quon a essayé de taper qq chose)
          :
          inputValue.length === 0 ? displayMsg("Veuillez effectuer une recherche", "green") //si l'utilisateur n'a encore rien tapé dans l'input ou a tout effacé
          :
          <TableData data={resultInput}/>
        }
        
        </>  
      }

    </div>
  );
}

export default App;

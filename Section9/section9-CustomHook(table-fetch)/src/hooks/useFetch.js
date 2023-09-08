//on commence toujours un Custom Hook avec "use" dans le nom
import {useState, useEffect} from "react"

const [dataState, setDataState] = useState([])
const [isLoading, setIsLoading] = useState(true)

const useFetch = (fetchUrl) => {

    useEffect(() => {
    
        fetch(fetchUrl)
        .then(res => res.json())
        .then (data => {
          setDataState(data)
          setIsLoading(false)
        })
        .catch(err => console.log(err))
      },[fetchUrl]) //on passe l'url en dépendance pour provoquer un nouveau fetch à chaque fois qu'on change d'appel d'URL

      return { dataState, isLoading } //on pourrait retouner ce qu'on veut, objet tableau boolean fonctions... ici on retourne un objet
}      //on retoune les 2 states qu'on a crée pour pouvoir les récupérer dans App.js

export default useFetch
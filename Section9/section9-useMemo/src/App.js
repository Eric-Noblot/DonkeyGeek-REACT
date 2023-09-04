import './App.css';
import Profile from "./Profile"
import { useState, useEffect, useMemo } from "react"

function App() {

  const [count, setCount] = useState(1)
  const [profile, setProfile ] = useState({})

  const [isDark, setIsDark] = useState(false)

  useEffect(() => {

    fetch(`https://jsonplaceholder.typicode.com/users/${count}`)
    .then(res => res.json())
    .then(data => setProfile(data))
    .catch(err => console.log(err))

  },[count])



  const goDark = () => {
    console.log("je suis dans dark")
    setIsDark(!isDark) // on set avec le contraire
    if (!isDark) {  //si isSdark est faux
      document.body.classList.add("dark")
    }
    else {
      document.body.classList.remove("dark")
    }
  }

  const colorBtnTheme = isDark ? "white" : "black"
  const colorBtnText = isDark ? "black" : "white"
  const textBtn = isDark ? "Turn light" : "Turn dark"

    // const isOverTen = () => {
  //   console.log("je suis dans is over ten")
  //   return count > 10
  // }

  const memoizedValue = useMemo(() => {
    console.log("je suis dans is over ten")
    return count > 10
  },[count])

  return (
    <div className="container">

      <h1>useMemo()</h1>

      {/* {isOverTen() && <div className="stop">STOP !!!</div>} */}
      {memoizedValue && <div className="stop">STOP !!!</div>}

      <button className="btn btnLeft" onClick={() => setCount(count + 1)}>Increment {count}</button>
      <button className="btn btnRight" style={{backgroundColor: `${colorBtnTheme}`, color: `${colorBtnText}`}} onClick={goDark}>{textBtn}</button>
      
      <Profile profile={profile} count={count}/>

      <p style={{fontSize: "18px", fontWeight: "bold" }}>Infos JSON récupérées : </p>
      <p style={{color: "orange"}}>{JSON.stringify(profile)}</p>
    </div>
  );
}

export default App;

//Dans cet exemple on test l'utilité de useMemo. la fonction useMemo renvoie une valeur mémoisée, cest a dire
//qu'on va pouvoir stocker le resultat dune fonction et ainsi ne pas etre obligé de recharger la fonction pour rien.
//Avec le bouton change à droite, on modifie l'état du state de Dark pour modifier les couleurs,
//si on console.log les differents etats, on se rend compte que le fait de toogle de dark à light provoque aussi
//le rerender du composant Profile ainsi que la fonction isDark. Comme on change le state de Dark, App rerender
//tout ce qu'il ya à l'interieur et donc le composants Profile et la fonction isDark()

//Pour cela on utilise la méthode useMemo, et on va régler chacun des problèmes, soit :
  // Le probleme au sein d'un composant : dans ce cas là il suffit d'utiliser la méthode React.memo dans l'export du Profile.
  //On passe ensuite en paramètre Profile --> export default React.memo(Profile)

  //Le problème au sein d'une fonction qui s'enclenche au render de la page
  //Pour la fonction isDark(), on va importer {useMemo} en haut, puis on va créer un fonction useMemo(() => {
  //dans laquelle on va copier notre fonction précédente Dark. Ici on crée une variable memoizedValue qui va contenir
  //le résultat de notre fonction isDark. On a donc maitenant un variable poour stocker le resultat, et non une fonction direct.
  //Cest cette nouvelle variable qui nous sert de point d'entrée pour notre condition dans le HTML {memoizedValue && <div...
  //Ensuite useMemo a besoin d'un 2eme paramètre, c'est la dépendance pour lequel on l'autorise à se recharger, en 
  //l'occurence on lui dit de stocker la valeur true ou false de isDark, et seulement si le count est modifié, alors
  //il recalcule et il reactive la fonction.

// Grace à ses 2 solutions, le console.log("je suis dans dark") et console.log("je suis dans is over ten")
// ne sont plus déclencher à chaque cliquer sur le bouton turn light / turn dark


//useCallback : renvoie une fonction de rappel mémorisée (on récupère la fonction)
//useMemo: renvoie une valeur mémorisée (on récupère le résultat de la fonction)

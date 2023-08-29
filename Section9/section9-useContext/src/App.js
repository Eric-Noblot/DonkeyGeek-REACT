import './App.css';
import Counter from "./Counter"
import { nameAgeContext } from './MyContext';
import { useState } from "react"

console.log(nameAgeContext)
function App() {

  const [user, setUser ] = useState({
    name: "Bart",
    age: 8
  })

  return (
    
    <nameAgeContext.Provider value={user}>
      <Counter/>
    </nameAgeContext.Provider>
  );
}

export default App;

// CREATION DU CONTEXT :
// On crée un fichier à part pour le context 'MyContext.js", dans lequel on crée une const et on React.createContext()
// On import la const dans l'arbre parent (App), et on s'en sert comme component qui va wrap notre composant enfant(Counter)
// On ajoute .Provider pour approvisioner les enfants, et on spécifie value avec la donnée qu'on veut distribuer (ici un state avec l'objet user)
// on se rend dans l'enfant où on veut se servir du context (ici Form, qui est lui même enfant de Counter)
// on import dans Form: useContext + la variable qui passe les données (nameAgeContext de MyContext) 
// toujours dans Form, on se sert de useContext pour créer une variable qui va récupérer les données du context entre parathèses -> const user = useContext(nameAgeContext)
// les données sont maintenant dans user et on peut récupérer le nom avec user.name